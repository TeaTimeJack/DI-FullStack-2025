-- CREATE TABLE actors(
-- actor_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(100) NOT NULL,
-- date_of_birth DATE NOT NULL,
-- number_oscars SMALLINT NOT NULL
-- ) 


-- SELECT * FROM actors

-- INSERT INTO actors (first_name,last_name,date_of_birth,number_oscars)
-- VALUES ('Matt', 'Damon', '08.10.1970', 5)

-- SELECT * FROM actors

-- INSERT INTO actors (first_name,last_name,date_of_birth,number_oscars)
-- VALUES ('Cristina', 'Agilerra', '12.6.1987', 2),('Angelina', 'Jolie', '22.2.1982', 4)

-- SELECT * FROM actors

-- SELECT last_name From actors


-- SELECT first_name, last_name FROM actors

-- SELECT * FROM actors WHERE number_oscars >2
-- SELECT * FROM actors WHERE first_name  = 'Matt'

-- SELECT * FROM actors

-- UPDATE actors
-- SET date_of_birth = '23.3.1983' WHERE first_name = 'Angelina'
-- RETURNING
-- *



-- ALTER TABLE actors RENAME COLUMN number_oscars TO oscars;
-- SELECT * FROM actors

-- ALTER TABLE actors ADD COLUMN is_alive BOOLEAN;
-- SELECT * FROM actors


-- CREATE TABLE items(
-- item_id SERIAL PRIMARY KEY,
-- item_name VARCHAR(50) NOT NULL,
-- item_price SMALLINT NOT NULL
-- );
-- CREATE TABLE customers(
-- customer_id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR(100) NOT NULL
-- )

-- SELECT * FROM items
-- INSERT INTO items (item_name,item_price)
-- VALUES ('Small Desk',100),('Large desk',300),('Fan', 80);
-- INSERT INTO customers (first_name,last_name)
-- VALUES ('Greg','Jones'),('Sandra','Jones'),('Scott','Scott'),('Trevor','Green'),('Melanie','Johnson')

SELECT * FROM items









