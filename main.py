from flask import Flask, render_template, url_for, request, session
from util import json_response, jsonify
import util
import os

from data_manager import database_manager
import data_handler, persistence


app = Flask(__name__)
app.secret_key = b'\xe8\x00\x04\xcd\x1b\xc1y\x9a\xba\x1f\xae\xc2\xf1\xed\xb0\x97\xdc`W\x91\x0fNc2'


@app.route("/")
def index():
    """
    This is a one-pager which shows all the boards and cards
    """
    return render_template('index.html')


@app.route("/boards", methods=["GET", "POST", "PUT"])
@json_response
def get_boards():
    """
    All the boards
    """
    if request.method == "POST":
        data = request.get_json()
        new_board_data = database_manager.save_new_board_data(data)
        new_board_id = dict(new_board_data[0])["id"]
        database_manager.update_new_board_default_statuses(new_board_id);
        newly_created_board_data = database_manager.get_newly_created_board_data(new_board_id)
        return newly_created_board_data
    if request.method == "GET":
        boards = database_manager.get_boards()
        return boards
    if request.method == "PUT":
        data = request.get_json()
        data_dict = dict(data.items())
        return database_manager.update_board_title(data_dict)


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
    render_template('index.html')


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
    elif request.method == 'PUT':
        data_dict = dict(data.items())
        return database_manager.update_card_data(data_dict)
    elif request.method == 'DELETE':
        return database_manager.delete_card(card_id)
    else:
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


def main():
    app.run(debug=True)

    # Serving the favicon
    with app.app_context():
        app.add_url_rule('/favicon.ico', redirect_to=url_for('static', filename='favicon/favicon.ico'))


if __name__ == '__main__':
    main()
