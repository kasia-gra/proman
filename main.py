from flask import Flask, render_template, url_for, request, session
from flask_socketio import SocketIO, send
from util import json_response, jsonify
import util
import os

from data_manager import database_manager
import data_handler, persistence

app = Flask(__name__)
app.secret_key = b'\xe8\x00\x04\xcd\x1b\xc1y\x9a\xba\x1f\xae\xc2\xf1\xed\xb0\x97\xdc`W\x91\x0fNc2'
socketio = SocketIO(app)


@app.route("/")
def index():
    """
    This is a one-pager which shows all the boards and cards
    """
    return render_template('index.html')


@app.route("/boards", methods=["GET", "POST", "PUT"])
@app.route("/boards/<int:board_id>", methods=['DELETE'])
@json_response
def boards(board_id=None):
    """
    All the boards
    """
    if request.method == "POST":
        data = request.get_json()
        newly_created_board_data = util.prepare_borad_data_to_post(data)
        newly_created_board_data["user_id"] = None
        database_manager.save_user_data_for_new_board(newly_created_board_data)
        return newly_created_board_data
    if request.method == "GET":
        all_boards = database_manager.get_boards()
        return all_boards
    if request.method == "PUT":
        data = request.get_json()
        data_dict = dict(data.items())
        return database_manager.update_board_title(data_dict)
    if request.method == "DELETE":
        print(board_id)
        return database_manager.delete_board(board_id)


@app.route("/private_boards", methods=["GET", "POST"])
@app.route("/private_boards/<int:board_id>", methods=['DELETE'])
@json_response
def private_boards(board_id=None):
    if request.method == "POST":
        data = request.get_json()
        print(data)
        if data["user_id"]:
            newly_created_board_data = util.prepare_borad_data_to_post(data)
            newly_created_board_data["user_id"] = data["user_id"]
            database_manager.save_user_data_for_new_board(newly_created_board_data)
            return newly_created_board_data
        else:
            return "This action is not allowed"


@app.route("/statuses", methods=['GET', 'POST'])
@app.route("/statuses/<int:status_id>", methods=['PUT', 'DELETE'])
@json_response
def statuses(status_id=None):
    """
    All the boards
    """
    if request.method == 'GET':
        return database_manager.get_statuses()
    if request.method == 'POST':
        data_dict = request.get_json()
        return database_manager.save_new_status(data_dict)
    if request.method == 'PUT':
        data_dict = request.get_json()
        return database_manager.edit_status(data_dict)
    if request.method == 'DELETE':
        data_dict = request.get_json()
        return database_manager.delete_status(data_dict)


@app.route("/cards", methods={"GET", "POST"})
@app.route("/cards/<int:card_id>", methods=["GET", "POST", "PUT", "DELETE"])
@json_response
def cards(card_id=None):
    data = request.get_json()
    if request.method == "POST":
        data_dict = dict(data.items())
        saved_data = database_manager.save_new_card(data_dict)
        data_dict["id"] = saved_data[0]["id"]
        return data_dict
    if request.method == 'PUT':
        data_dict = dict(data.items())
        return database_manager.update_card_data(data_dict)
    if request.method == 'DELETE':
        return database_manager.delete_card(card_id)
    return database_manager.get_all_cards()


@app.route("/cards_statuses", methods=["PUT"])
@json_response
def update_cards_statuses():
    if request.method == "PUT":
        data = request.get_json()
        data_dict = dict(data.items())
        return util.update_cards_order(data_dict)


@app.route("/users", methods=["GET", "POST"])
@json_response
def user_registration():
    if request.method == 'GET':
        return "test?"

    new_user_data = request.get_json()
    users_data = database_manager.get_names_and_emails()
    for user in users_data:
        if user['name'] == 'public':
            continue
        elif new_user_data['name'] == user['name']:
            return "This name is already taken"
        elif new_user_data['email'] == user['email']:
            return "This email is already taken"

    new_user_data['password'] = util.hash_password(new_user_data['password'])
    database_manager.add_new_user(new_user_data)
    return "You have been registered"


@app.route("/login", methods=['GET', 'POST'])
@json_response
def login():
    if request.method == 'GET':
        return 'test'

    login_user_data = request.get_json()
    user = database_manager.get_user_by_email(login_user_data['email'])
    if user is not None \
            and login_user_data['email'] in user['email'] \
            and util.verify_password(login_user_data['password'], user['password']):
        session['email'] = login_user_data['email']
        session['user_id'] = user['id']
        session['name'] = user['name']
        return {'message': 'You have been logged in.',
                'user': user}

    return {'message': "Wrong email or password"}


@app.route("/logout", methods=['GET', 'POST'])
@json_response
def logout():
    session.pop('email', None)
    return 'You have been logged out!'


@socketio.on('message')
def distribute_messages(msg):
    send(msg, broadcast=True)


def main():
    socketio.run(app, debug=True)

    # Serving the favicon    // not sure if this will work with socketio
    with app.app_context():
        app.add_url_rule('/favicon.ico', redirect_to=url_for('static', filename='favicon/favicon.ico'))


if __name__ == '__main__':
    main()
