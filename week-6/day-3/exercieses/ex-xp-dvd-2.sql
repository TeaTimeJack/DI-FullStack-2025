-- SELECT  film_id, title, film.language_id, language.name
-- FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id

-- SELECT * FROM language

-- UPDATE film SET language_id = (SELECT language_id FROM language WHERE name = 'French') WHERE title ='Ace Goldfinger'

-- SELECT  film_id, title, film.language_id, language.name
-- FROM film
-- INNER JOIN language
-- ON film.language_id = language.language_id
-- ORDER BY title ASC


-- SELECT   rental.inventory_id,inventory.film_id,film.title, film.replacement_cost
-- FROM rental 
-- INNER JOIN inventory
-- ON inventory.inventory_id = rental.inventory_id
-- INNER JOIN film
-- ON film.film_id = inventory.film_id
-- WHERE return_date < CURRENT_TIMESTAMP
-- ORDER BY film.replacement_cost DESC
-- LIMIT 30



-- SELECT title
-- FROM film
-- INNER JOIN film_actor
-- ON film_actor.film_id = film.film_id
-- INNER JOIN actor
-- ON actor.actor_id = film_actor.actor_id
-- WHERE description LIKE '%Sumo Wrestler%' AND actor.first_name = 'Penelope' AND actor.last_name = 'Monroe'

-- SELECT title
-- FROM film
-- INNER JOIN film_category
-- ON film_category.film_id = film.film_id
-- INNER JOIN category
-- ON category.category_id = film_category.category_id
-- WHERE category.name = 'Documentary' AND film.length < 60 AND film.rating = 'R'


-- SELECT title
-- FROM film
-- INNER JOIN inventory
-- ON inventory.film_id = film.film_id
-- INNER JOIN rental
-- ON rental.inventory_id = inventory.inventory_id
-- INNER JOIN customer
-- ON customer.customer_id = rental.customer_id
-- WHERE customer.first_name = 'Matthew' 
-- 	AND customer.last_name = 'Mahan'
-- 	AND film.rental_rate > 4 
-- 	AND rental.return_date > '28.7.2005' 
-- 	AND rental.return_date < '1.8.2005'



SELECT title, film.replacement_cost
FROM film
INNER JOIN inventory
ON inventory.film_id = film.film_id
INNER JOIN rental
ON rental.inventory_id = inventory.inventory_id
INNER JOIN customer
ON customer.customer_id = rental.customer_id 
WHERE film.description LIKE '%Boat%' 
	AND customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
ORDER BY film.replacement_cost DESC	


