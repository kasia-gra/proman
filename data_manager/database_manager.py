from psycopg2.extras import RealDictCursor, DictCursor
from psycopg2 import sql
import connection


@connection.connection_handler
def get_boards(cursor: RealDictCursor):
    cursor.execute(f"""
                    SELECT boards.id, boards.title, ARRAY_AGG(s.title ORDER BY s.id) AS statuses_list, 
                    ARRAY_AGG(s.id ORDER BY s.id) AS ids
                    FROM boards
                    JOIN board_statuses bs on boards.id = bs.board_id
                    JOIN statuses s on bs.status_id = s.id
                    GROUP BY boards.title, boards.id
                    ORDER BY boards.id;
                    """)
    return cursor.fetchall()



@connection.connection_handler
def get_all_cards(cursor: RealDictCursor):
    cursor.execute(f"""
                    SELECT *
                    FROM cards
                    """)
    return cursor.fetchall()

@connection.connection_handler
def save_new_board_data(cursor: RealDictCursor, board_data: dict):
    query = """
    INSERT INTO boards
    (title)
    VALUES (%(title)s)
    RETURNING *;
    """
    cursor.execute(query, {
        'title': board_data["title"]
    })
    return cursor.fetchall()


@connection.connection_handler
def update_new_board_default_statuses(cursor: RealDictCursor, new_board_id: int):
    query = f"INSERT INTO board_statuses " \
            f"(status_id, board_id)" \
            f"VALUES " \
            f"(1, {new_board_id})," \
            f"(2, {new_board_id})," \
            f"(3, {new_board_id})," \
            f"(4, {new_board_id})" \
            f"RETURNING *;"
    cursor.execute(query)


@connection.connection_handler
def get_newly_created_board_data(cursor: RealDictCursor, board_id: int):
    query = (f"""SELECT boards.id, boards.title, ARRAY_AGG(s.title) AS statuses_list, ARRAY_AGG(s.id) AS ids
                FROM boards
                JOIN board_statuses bs on boards.id = bs.board_id
                JOIN statuses s on bs.status_id = s.id
                GROUP BY boards.title, boards.id
                HAVING boards.id = %(board_id)s
                ORDER BY boards.id;
                """)
    cursor.execute(query, {'board_id': board_id})
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
    RETURNING *;
    """)
    cursor.execute(query, new_card)
    return cursor.fetchall()


@connection.connection_handler
def update_board_title(cursor: RealDictCursor, data_dict: dict):
    query = """
    UPDATE boards
    SET title = %(title)s
    WHERE id = %(board_id)s;
    """
    cursor.execute(query, {'board_id': data_dict["id"], 'title': data_dict["title"]})


@connection.connection_handler
def update_board_statuses(cursor: RealDictCursor, data_dict: dict):
    query = sql.SQL('UPDATE ONLY boards SET statuses = {statuses} WHERE id = {board_id}').format(statuses)
    cursor.execute(query)


@connection.connection_handler
def update_card_data(cursor: RealDictCursor, data_dict: dict):
    query = """
    UPDATE cards
    SET title = %(title)s
    WHERE id = %(id)s;
    """
    cursor.execute(query, data_dict)


@connection.connection_handler
def get_statuses(cursor: RealDictCursor):
    query = sql.SQL('SELECT * FROM statuses ORDER BY id;')
    cursor.execute(query)
    return cursor.fetchall()


@connection.connection_handler
def save_new_status(cursor: RealDictCursor, new_status: dict):
    query = sql.SQL('INSERT INTO statuses (title) VALUES ({status_title}) RETURNING *;').\
        format(status_title=sql.Literal(new_status['title']))
    cursor.execute(query)
    new_status_response = cursor.fetchone()
    query = sql.SQL('INSERT INTO board_statuses (status_id, board_id) VALUES ({status_id}, {board_id});').\
        format(status_id=sql.Literal(new_status_response['id']), board_id=sql.Literal(new_status['board']))
    cursor.execute(query)
    return new_status_response


@connection.connection_handler
def edit_status(cursor: RealDictCursor, status_edit: dict):
    query = sql.SQL('UPDATE ONLY statuses SET title = {new_title} WHERE id = {status_id} RETURNING *').\
        format(new_title=sql.Literal(status_edit['title']), status_id=sql.Literal(status_edit['id']))
    cursor.execute(query)
    return cursor.fetchone()


@connection.connection_handler
def delete_status(cursor: RealDictCursor, status: dict):
    query = sql.SQL("""
    DELETE FROM statuses s WHERE s.id = {status_id} RETURNING *
    """).\
        format(status_id=sql.Literal(status['statusId']))
    cursor.execute(query)
    return cursor.fetchone()


@connection.connection_handler
def delete_card(cursor: RealDictCursor, card_id: int):

    query = sql.SQL("""
        DELETE FROM cards
        WHERE id = {id}
        """).format(id=sql.Literal(card_id))
    cursor.execute(query)


@connection.connection_handler
def add_new_user(cursor: RealDictCursor, new_user_data: dict):
    cursor.execute("""
        INSERT INTO users(name, password, email)
        VALUES (%(name)s, %(password)s, %(email)s
       """, new_user_data)
