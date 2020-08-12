from functools import wraps
from flask import jsonify
import bcrypt
from data_manager import database_manager

def json_response(func):
    """
    Converts the returned dictionary into a JSON response
    :param func:
    :return:
    """
    @wraps(func)
    def decorated_function(*args, **kwargs):
        return jsonify(func(*args, **kwargs))

    return decorated_function


def hash_password(plain_text_password):
    """Encrypt passwords using bcrypt"""

    hashed_bytes = bcrypt.hashpw(plain_text_password.encode('utf-8'), bcrypt.gensalt())
    return hashed_bytes.decode('utf-8')


def update_cards_order(data_dict):
    iterate_through_cards_dict(data_dict, "status_dropped", "cards_dropped")
    if data_dict.get("cards_origin") != [] and data_dict.get("status_origin") != data_dict.get("status_dropped"):
        iterate_through_cards_dict(data_dict, "status_origin", "cards_origin")


def iterate_through_cards_dict(data_dict, cards_container, cards_status):
    card_order = 0
    for card_id in data_dict.get(cards_status):
        card_dict = {"card_order": card_order, "card_id": int(card_id),
                     "status_id": int(data_dict.get(cards_container))}
        database_manager.update_cards_statuses(card_dict)
        card_order = card_order + 1