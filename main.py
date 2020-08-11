from flask import Flask, render_template, url_for, request
from util import json_response, jsonify
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


@app.route("/boards", methods=["GET", "POST"])
@json_response
def get_boards():
    """
    All the boards
    """
    if request.method == "POST":
        data = request.get_json()
        data_dict = dict(data.items())
        saved_data = database_manager.save_new_board_data(data_dict)
        data_dict["id"] = saved_data[0]["id"]
        return data_dict
    else:
        boards = database_manager.get_boards()
        return boards


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


@app.route("/edit-board", methods=["GET", "POST"])
@json_response
def edit_board():
    if request.method == "POST":
        data = request.get_json()
        data_dict = dict(data.items())
        print(data_dict)
        database_manager.update_board_title(data_dict)
        return "test"
    else:
        return "Error"


@app.route("/register", methods=["GET", "POST"])
@json_response
def registration():

    if request.method == 'GET':
        return "test?"

    new_user_data = request.get_json()
    database_manager.add_new_user(new_user_data)
    return 'mission complete'


def main():
    app.run(debug=True)

    # Serving the favicon
    with app.app_context():
        app.add_url_rule('/favicon.ico', redirect_to=url_for('static', filename='favicon/favicon.ico'))


if __name__ == '__main__':
    main()
