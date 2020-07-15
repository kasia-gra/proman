from psycopg2.extras import RealDictCursor
import connection


@connection.connection_handler
def get_boards(cursor: RealDictCursor):
    cursor.execute(f"""
                    SELECT *
                    FROM boards;
                    """)
    return cursor.fetchall()


@connection.connection_handler
def save_new_board_data(cursor: RealDictCursor, new_board_data: dict):
    query = """
    INSERT INTO boards
    (title, statuses)
    VALUES (%(title)s, '0,1,2,3');
    """
    cursor.execute(query, {
        'title': new_board_data["title"]
        # 'statuses': new_board_data["statuses"]
    })


@connection.connection_handler
def get_cards_for_board(cursor: RealDictCursor, board_id: int):
    query = (f"""
                    SELECT *
                    FROM cards
                    WHERE board_id = %(board_id)s;
                    """)
    cursor.execute(query, {'board_id': board_id})
    return cursor.fetchall()

