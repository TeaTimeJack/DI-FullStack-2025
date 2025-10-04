-- 1.  -- SELECT * FROM language 

-- SELECT f.title, f.description, l.name
-- FROM film as f
-- INNER JOIN language as l
-- ON l.language_id = f.language_id

-- SELECT f.title, f.description, l.name
-- FROM language as l
-- LEFT JOIN film as f
-- ON l.language_id = f.language_id

-- CREATE TABLE new_film(
-- id SERIAL PRIMARY KEY,
-- name VARCHAR (50)
-- )

-- INSERT INTO new_film (name)
-- VALUES ('Big Fish'),('Fight Club'), ('Trolls'),('Shrek') ;

-- SELECT * FROM new_film

-- CREATE TABLE customer_review(
-- review_id SERIAL PRIMARY KEY,
-- film_id INT NOT NULL,
-- language_id VARCHAR (50),
-- title VARCHAR (50),
-- score INT CHECK (score >= 1 AND score <=10) NOT NULL,
-- review_text VARCHAR,
-- last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- INSERT INTO customer_review (film_id,language_id,title,score,review_text,last_update)
-- VALUES ((SELECT id FROM new_film WHERE name = 'Fight Club'),
-- (SELECT language_id FROM language WHERE name = 'German'),
-- 'How To Fihgt Own Self', 8, 'First Rule - Never Talk About FightClub!',CURRENT_TIMESTAMP),
-- ((SELECT id FROM new_film WHERE name = 'Shrek'),
-- (SELECT language_id FROM language WHERE name = 'French'),
-- 'Not A real FarryTale', 9,
-- 'When all you want is to be alone but secretly want a friend and all the farytales makes lots of nois in your ack yard',
-- CURRENT_TIMESTAMP);


-- DELETE FROM new_film WHERE name = 'Shrek'

-- SELECT new_film.name, customer_review.title,customer_review.language_id,customer_review.score,customer_review.last_update
-- FROM new_film
-- FULL JOIN customer_review
-- on customer_review.film_id = new_film.id

-- SELECT * FROM new_film











