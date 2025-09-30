--JOINS SQL


--INNER JOIN

-- SELECT actors.first_name, actors.last_name, movies.movie_title
-- FROM actors
-- INNER JOIN movies
-- ON actors.actor_id = movies.actor_playing_id

-- CREATE TABLE producers(
-- producer_id SERIAL,
-- producer_name VARCHAR (50) NOT NULL,
-- date_of_birth DATE,
-- movies_produced_id INTEGER,
-- PRIMARY KEY (producer_id),
-- FOREIGN KEY (movies_produced_id) REFERENCES movies (movie_id)
-- );


-- INSERT INTO producers (producer_name,date_of_birth,movies_produced_id)
-- VALUES ('Dude','1.1.1970',(SELECT movie_id FROM movies WHERE movie_title = 'Oceans Eleven'));


-- SELECT * FROM producers


-- SELECT movies.movie_title, producers.producer_name
-- FROM movies
-- INNER JOIN producers
-- ON movies.movie_id = producers.movies_produced_id


--LEFT JOIN

-- SELECT producers.producer_name, movies.movie_title
-- FROM producers
-- LEFT JOIN movies
-- on producers.movies_produced_id = movies.movie_id

--FULL JOIN
-- SELECT producers.producer_name, movies.movie_title
-- FROM producers
-- FULL JOIN movies
-- on producers.movies_produced_id = movies.movie_id

-- CREATE TABLE countries(
-- country_id SERIAL PRIMARY KEY,
-- countrie_name VARCHAR (50)
-- )

-- INSERT INTO countries (countrie_name)
-- VALUES ('Israel') , ('USA'), ('France'), ('Brazil'), ('Spain'), ('Egypt');

-- SELECT * FROM countries

-- SELECT countries.countrie_name, actors.first_name, actors.last_name, actors.is_alive
-- FROM countries
-- INNER JOIN actors
-- ON actors.actor_id = countries.country_id 


SELECT countries.countrie_name, actors.first_name, actors.last_name, actors.is_alive
FROM countries
FULL JOIN actors
ON actors.actor_id = countries.country_id 













