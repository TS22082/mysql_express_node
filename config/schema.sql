DROP DATABASE IF EXISTS todo_db;
CREATE DATABASE todo_db;
USE todo_db;

CREATE TABLE todos(
	id INTEGER AUTO_INCREMENT NOT NULL,
	todo VARCHAR(800),
	PRIMARY KEY (id)
);

INSERT INTO todos(todo)
VALUES("Do the thing");

INSERT INTO todos(todo)
VALUES("Do the other thing");

SELECT todo FROM todos WHERE id=1;

SELECT * FROM todos;