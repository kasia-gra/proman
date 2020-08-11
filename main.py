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


@app.route("/cards/<int:board_id>", methods=["GET", "POST"])
@json_response
def get_cards_for_board(board_id: int):
    """
    All cards that belongs to a board
    :param board_id: id of the parent board
    """

    if request.method == "POST":
        data = request.get_json()
        data_dict = dict(data.items())
        saved_data = database_manager.save_new_card(data_dict)
        data_dict["id"] = saved_data[0]["id"]
        print(data_dict)
        return data_dict
    else:
        return database_manager.get_cards_for_board(board_id)


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


@app.route("/edit-card", methods=["GET", "POST", "DELETE"])  # TODO ask mentor about methods
@app.route("/edit-card/<int:card_id>", methods=["GET", "POST", "DELETE"])
@json_response
def edit_card(card_id=None):

    if request.method == "POST":
        data = request.get_json()
        data_dict = dict(data.items())
        database_manager.update_card_data(data_dict)
        return 'DONE'
    elif request.method == "DELETE":
        database_manager.delete_card(card_id)
        return 'DELETED'
    else:
        return 'ERROR'


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
