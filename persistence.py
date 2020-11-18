import csv
import os

FOLDER = f"{os.path.abspath(os.path.dirname(__file__))}"
STATUSES_FILE = FOLDER + '/data/statuses.csv'
BOARDS_FILE = FOLDER + '/data/boards.csv'
CARDS_FILE = FOLDER + '/data/cards.csv'

_cache = {}  # We store cached data in this dict to avoid multiple file readings


def _read_csv(file_name):
    """
    Reads content of a .csv file
    :param file_name: relative path to data file
    :return: OrderedDict
    """
    with open(file_name) as boards:
        rows = csv.DictReader(boards, delimiter=',', quotechar='"')
        formatted_data = []
        for row in rows:
            formatted_data.append(dict(row))
        return formatted_data


def save_new_status(dict_data):
    with open(STATUSES_FILE, 'a', newline='') as csv_file:
        filednames = ['id', 'title']
        writer = csv.DictWriter(csv_file, fieldnames=filednames)
        writer.writerow(dict_data)


def save_new_board_data(dict_data):
    with open(BOARDS_FILE, 'a', newline='') as csvfile:
        fieldnames = ['id', 'title', 'statuses']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writerow(dict_data)


def save_new_card_data(dict_data):
    with open(CARDS_FILE, 'a', newline='') as csvfile:
        fieldnames = ['id', 'board_id', 'title', 'status_id', 'order']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writerow(dict_data)


def _get_data(data_type, file, force):
    """
    Reads defined type of data from file or cache
    :param data_type: key where the data is stored in cache
    :param file: relative path to data file
    :param force: if set to True, cache will be ignored
    :return: OrderedDict
    """
    if force or data_type not in _cache:
        _cache[data_type] = _read_csv(file)
    return _cache[data_type]


def clear_cache():
    for k in list(_cache.keys()):
        _cache.pop(k)


def get_statuses(force=False):
    return _get_data('statuses', STATUSES_FILE, force)


def get_boards(force=False):
    return _get_data('boards', BOARDS_FILE, force)


def get_cards(force=False):
    return _get_data('cards', CARDS_FILE, force)
