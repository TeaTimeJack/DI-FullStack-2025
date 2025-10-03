-- CREATE TABLE movies2 (
--   movie_id SERIAL,
--   movie_title VARCHAR(45) NOT NULL,
--   released_date date NOT NULL,
--   PRIMARY KEY (movie_id)
-- );

-- INSERT into movies2(movie_title, released_date) VALUES 
-- ('Good Will Hunting', '1997-12-02'),
-- ('The Martian', '2015-09-11'),
-- ('Oceans Twelve', '2004-12-10'),
-- ('Up in the Air', '2009-09-5');

-- CREATE TABLE scenarios (
--   pk_movie_id INTEGER NOT NULL,
--   scenario_story TEXT NOT NULL,
--   PRIMARY KEY (pk_movie_id),
--   CONSTRAINT fk_movie_id FOREIGN KEY (pk_movie_id) REFERENCES movies2 (movie_id)
-- );

-- INSERT into scenarios(pk_movie_id, scenario_story) VALUES 
-- ((SELECT movie_id FROM movies2 where movie_title = 'Up in the Air'),
-- 'Ryan Bingham enjoys living out of a suitcase for his job, 
-- traveling around the country firing people, but finds that lifestyle 
-- threatened by the presence of a potential love interest, and a new hire.'),
-- ((SELECT movie_id FROM movies2 where movie_title = 'The Martian'),
-- 'In 2035, the crew of the Ares III mission to Mars is exploring 
-- Acidalia Planitia on Martian solar day (sol) 18 of their 31-sol expedition. ');

-- SELECT movies2.movie_id, movies2.movie_title, movies2.released_date, scenarios.scenario_story as scenario
-- FROM movies2
-- FULL JOIN scenarios
-- ON movies2.movie_id = scenarios.pk_movie_id;