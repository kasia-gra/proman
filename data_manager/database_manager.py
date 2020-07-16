from psycopg2.extras import RealDictCursor
import connection


@connection.connection_handler
def get_boards(cursor: RealDictCursor):
    cursor.execute(f"""
                    SELECT *
                    FROM boards
                    ORDER BY id;
                    """)
    return cursor.fetchall()


@connection.connection_handler
def save_new_board_data(cursor: RealDictCursor, new_board_data: dict):
    query = """
    INSERT INTO boards
    (title, statuses)
    VALUES (%(title)s, '0,1,2,3')
    RETURNING *;
    """
    cursor.execute(query, {
        'title': new_board_data["title"]
        # 'statuses': new_board_data["statuses"]
    })
    return cursor.fetchall()


@connection.connection_handler
def get_cards_for_board(cursor: RealDictCursor, board_id: int):
    query = (f"""
                    SELECT *
                    FROM cards
                    WHERE board_id = %(board_id)s;
                    """)
    cursor.execute(query, {'board_id': board_id})
    return cursor.fetchall()


@connection.connection_handler
def save_new_card(cursor:RealDictCursor, new_card: dict):
    query = (f"""
            INSERT INTO cards
            (board_id, title, status_id, "order")
            VALUES (%(board_id)s, %(title)s, %(status_id)s, %(order)s)
            """)
    cursor.execute(query, new_card)


@connection.connection_handler
def update_board_title(cursor: RealDictCursor, data_dict: dict):
    query = """
    UPDATE boards
    SET title = %(title)s
    WHERE id = %(board_id)s;
    """
    cursor.execute(query, {'board_id': data_dict["id"], 'title': data_dict["title"]})
