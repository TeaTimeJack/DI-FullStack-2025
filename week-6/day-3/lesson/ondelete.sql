-- CREATE TABLE colors(
-- color_id SERIAL PRIMARY KEY,
-- name VARCHAR (15)
-- )

-- INSERT INTO colors (name)
-- VALUES ('black'),('yellow'),('pink'),('blue'),('red')

-- SELECT * FROM colors

-- CREATE TABLE cars_restrict(
-- car_id SERIAL PRIMARY KEY,
-- car_color INTEGER REFERENCES colors (color_id) ON DELETE RESTRICT,
-- car_name TEXT)

-- INSERT INTO cars_restrict (car_color,car_name)
-- VALUES
-- ((SELECT color_id FROM colors WHERE name = 'black'), 'Mazda'),
-- ((SELECT color_id FROM colors WHERE name = 'red'), 'BMW'),
-- ((SELECT color_id FROM colors WHERE name = 'pink'), 'ferrari');

-- SELECT * FROM cars_restrict

-- CREATE TABLE cars_cascade(
-- car_id SERIAL PRIMARY KEY,
-- car_color INTEGER REFERENCES colors (color_id) ON DELETE CASCADE,
-- car_name TEXT);

-- INSERT INTO cars_cascade (car_color,car_name)
-- VALUES
-- ((SELECT color_id FROM colors WHERE name = 'black'), 'Mazda'),
-- ((SELECT color_id FROM colors WHERE name = 'red'), 'BMW'),
-- ((SELECT color_id FROM colors WHERE name = 'pink'), 'ferrari');


-- DELETE FROM colors WHERE name = 'black';
-- UPDATE colors SET color_id = 4 WHERE name = 'red'
-- SELECT * FROM cars_cascade


-- CREATE TABLE cars_null(
-- car_id SERIAL PRIMARY KEY,
-- car_color INTEGER REFERENCES colors (color_id) ON DELETE SET NULL,
-- car_name TEXT);

-- INSERT INTO cars_null (car_color,car_name)
-- VALUES
-- ((SELECT color_id FROM colors WHERE name = 'black'), 'Mazda'),
-- ((SELECT color_id FROM colors WHERE name = 'red'), 'BMW'),
-- ((SELECT color_id FROM colors WHERE name = 'pink'), 'ferrari');



DELETE FROM colors WHERE color_id = 3;
SELECT * FROM cars_null



