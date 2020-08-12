ALTER TABLE IF EXISTS ONLY public.cards DROP CONSTRAINT IF EXISTS pk_id CASCADE;
ALTER TABLE IF EXISTS ONLY public.cards DROP CONSTRAINT IF EXISTS fk_board_id CASCADE;
ALTER TABLE IF EXISTS ONLY public.cards DROP CONSTRAINT IF EXISTS fk_status_id CASCADE;

ALTER TABLE IF EXISTS ONLY public.statuses DROP CONSTRAINT IF EXISTS pk_id CASCADE;

ALTER TABLE IF EXISTS ONLY public.users_boards DROP CONSTRAINT IF EXISTS pk_id CASCADE;
ALTER TABLE IF EXISTS ONLY public.users_boards DROP CONSTRAINT IF EXISTS fk_user_id CASCADE;
ALTER TABLE IF EXISTS ONLY public.users_boards DROP CONSTRAINT IF EXISTS fk_board_id CASCADE;

ALTER TABLE IF EXISTS ONLY public.board_statuses DROP CONSTRAINT IF EXISTS pk_id CASCADE;
ALTER TABLE IF EXISTS ONLY public.board_statuses DROP CONSTRAINT IF EXISTS fk_status_id CASCADE;
ALTER TABLE IF EXISTS ONLY public.board_statuses DROP CONSTRAINT IF EXISTS fk_board_id CASCADE;

ALTER TABLE IF EXISTS ONLY public.boards DROP CONSTRAINT IF EXISTS pk_id CASCADE;
ALTER TABLE IF EXISTS ONLY public.users DROP CONSTRAINT IF EXISTS pk_id CASCADE;


DROP TABLE IF EXISTS public.users CASCADE;
CREATE TABLE users (
    id serial,
    name text,
    password text,
    email text,
    PRIMARY KEY (id)
);

INSERT INTO users (name, password, email) VALUES
    ('public', null, null),
    ('test', '$2b$12$Fho8QWqqRxZVZyvz8.J2/OgbxTjPG6p8UylbTtwcEgMCUJGCb9Am6', 'test@test.com');
SELECT pg_catalog.setval('users_id_seq', 2, true);


DROP TABLE IF EXISTS public.user_boards;
CREATE TABLE user_boards (
    id serial,
    user_id integer,
    board_id integer,
    PRIMARY KEY (id)
);

INSERT INTO user_boards (user_id, board_id) VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 4);
SELECT pg_catalog.setval('user_boards_id_seq', 4, true);



DROP TABLE IF EXISTS public.boards;
CREATE TABLE boards (
    id serial,
    title text,
    PRIMARY KEY (id)
);


INSERT INTO boards (title) VALUES
    ('Board 1'),
    ('Board 2'),
    ('Board 3'),
    ('Board 4');
SELECT pg_catalog.setval('boards_id_seq', 3, true);


DROP TABLE IF EXISTS public.statuses;
CREATE TABLE statuses (
    id serial,
    title text,
    PRIMARY KEY (id)
);

INSERT INTO statuses (title) VALUES
    ('new'),
    ('in progress'),
    ('testing'),
    ('done');
-- SELECT pg_catalog.setval('statuses_id_seq', 3, true);



DROP TABLE IF EXISTS public.board_statuses;
CREATE TABLE board_statuses (
    id serial,
    status_id integer,
    board_id integer,
    PRIMARY KEY (id)
);


INSERT INTO board_statuses (status_id, board_id) VALUES
    (1, 1),
    (2, 1),
    (3, 1),
    (4, 1),
    (1, 2),
    (2, 2),
    (3, 2),
    (4, 2),
    (1, 3),
    (2, 3),
    (3, 3),
    (4, 3),
    (1, 4),
    (2, 4),
    (3, 4),
    (4, 4);
SELECT pg_catalog.setval('board_statuses_id_seq', 16, true);


DROP TABLE IF EXISTS public.cards;
CREATE TABLE cards (
    id  serial,
    board_id integer,
    title text,
    status_id integer,
    card_order integer,
    PRIMARY KEY (id)
--     FOREIGN KEY (board_id) REFERENCES boards (id) ON DELETE CASCADE,
--     FOREIGN KEY (status_id) REFERENCES statuses (id) ON DELETE CASCADE
);


INSERT INTO cards (board_id, title, status_id, card_order) VALUES
       (1, 'new card 1', 1, 0),
       (1, 'new card 2', 1, 1),
       (1, 'in progress card', 2, 0),
       (1,'planning', 3, 0),
       (1,'done card 1', 4, 0),
       (1,'done card 1', 4, 1),
       (2,'new card 1', 1, 0),
       (2,'in progress card', 2, 0),
       (2,'planning', 3, 0),
       (2,'done card 1', 4, 0);
SELECT pg_catalog.setval('cards_id_seq', 10, true);

ALTER TABLE ONLY cards
    ADD CONSTRAINT fk_board_id FOREIGN KEY (board_id) REFERENCES boards(id);

ALTER TABLE ONLY cards
    ADD CONSTRAINT fk_status_id FOREIGN KEY (status_id) REFERENCES statuses(id) ON DELETE CASCADE;

ALTER TABLE ONLY board_statuses
    ADD CONSTRAINT fk_board_id FOREIGN KEY (board_id) REFERENCES boards(id);

ALTER TABLE ONLY board_statuses
    ADD CONSTRAINT fk_status_id FOREIGN KEY (status_id) REFERENCES statuses(id) ON DELETE CASCADE;

ALTER TABLE ONLY user_boards
    ADD CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(id);

ALTER TABLE ONLY user_boards
    ADD CONSTRAINT fk_board_id FOREIGN KEY (board_id) REFERENCES boards(id);