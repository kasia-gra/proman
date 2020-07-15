ALTER TABLE IF EXISTS ONLY public.cards DROP CONSTRAINT IF EXISTS pk_id CASCADE;
ALTER TABLE IF EXISTS ONLY public.cards DROP CONSTRAINT IF EXISTS fk_board_id CASCADE;
ALTER TABLE IF EXISTS ONLY public.cards DROP CONSTRAINT IF EXISTS fk_status_id CASCADE;

ALTER TABLE IF EXISTS ONLY public.boards DROP CONSTRAINT IF EXISTS pk_id CASCADE;

ALTER TABLE IF EXISTS ONLY public.statuses DROP CONSTRAINT IF EXISTS pk_id CASCADE;




DROP TABLE IF EXISTS public.boards;
CREATE TABLE boards (
    id serial,
    title text,
    statuses text,
    PRIMARY KEY (id)
);



INSERT INTO boards (id, title, statuses) VALUES
    (0, 'Board 1', '0,1,2,3'),
    (1, 'Board 2', '0,1,2,3'),
    (2, 'Board 3', '0,1,2,3');
SELECT pg_catalog.setval('boards_id_seq', 2, true);


DROP TABLE IF EXISTS public.statuses;
CREATE TABLE statuses (
    id serial,
    title text,
    PRIMARY KEY (id)
);



INSERT INTO statuses (id, title) VALUES
    (0, 'new'),
    (1, 'in progress'),
    (2, 'testing'),
    (3, 'done');
SELECT pg_catalog.setval('statuses_id_seq', 3, true);


DROP TABLE IF EXISTS public.cards;
CREATE TABLE cards (
    id  serial,
    board_id integer,
    title text,
    status_id integer,
    "order" integer,
    PRIMARY KEY (id)
--     FOREIGN KEY (board_id) REFERENCES boards (id) ON DELETE CASCADE,
--     FOREIGN KEY (status_id) REFERENCES statuses (id) ON DELETE CASCADE
);



INSERT INTO cards (board_id, title, status_id, "order") VALUES
       (1, 'new card 1', 0, 0),
       (1, 'new card 2', 0, 1),
       (1, 'in progress card', 1, 0),
       (1,'planning', 2, 0),
       (1,'done card 1', 3, 0),
       (1,'done card 1', 3, 1),
       (2,'new card 1', 0, 0),
       (2,'in progress card', 1, 0),
       (2,'planning', 2, 0),
       (2,'done card 1', 3, 0);
SELECT pg_catalog.setval('cards_id_seq', 2, true);

ALTER TABLE ONLY cards
    ADD CONSTRAINT fk_board_id FOREIGN KEY (board_id) REFERENCES boards(id);

ALTER TABLE ONLY cards
    ADD CONSTRAINT fk_status_id FOREIGN KEY (status_id) REFERENCES statuses(id);