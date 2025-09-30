-- SELECT * FROM customer

-- SELECT first_name, last_name
-- FROM customer AS full_name

-- SELECT DISTINCT create_date FROM customer

-- SELECT * FROM customer
-- ORDER BY first_name DESC


-- SELECT film_id, title, description, release_year, rental_rate
-- FROM film
-- ORDER BY rental_rate ASC

-- SELECT address, phone
-- FROM address
-- WHERE district = 'Texas'

-- SELECT *
-- FROM film
-- WHERE film_id = 15 or film_id = 150

-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title = 'Titanic'


-- SELECT film_id, title, description, length, rental_rate
-- FROM film
-- WHERE title LIKE 'Ti%'

-- SELECT film_id, title,rental_rate,replacement_cost
-- FROM film
-- ORDER BY replacement_cost ASC
-- LIMIT 10


-- SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
-- FROM customer
-- INNER JOIN payment
-- ON customer.customer_id = payment.customer_id
-- ORDER BY customer.customer_id ASC

-- SELECT *
-- FROM film
-- LEFT JOIN inventory
-- ON film.film_id =inventory.film_id
-- WHERE inventory.film_id IS NULL

SELECT * 
FROM city
INNER JOIN country
ON country.country_id = city.country_id
ORDER BY country.country ASC







