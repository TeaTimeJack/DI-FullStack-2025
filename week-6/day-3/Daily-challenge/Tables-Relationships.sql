-- CREATE TABLE customer(
-- id SERIAL PRIMARY KEY,
-- first_name VARCHAR(50) NOT NULL,
-- last_name VARCHAR (50) NOT NULL
-- );

-- INSERT INTO customer (first_name, last_name)
-- VALUES ('John', 'Doe'), ('Jerome','Lalu'),('Lea','Rive');

-- SELECT * FROM customer

-- CREATE TABLE customer_profile (
--     id SERIAL,
--     isLoggedIn BOOLEAN DEFAULT FALSE,
--     customer_id INT NOT NULL,

--     PRIMARY KEY (id), 
--     CONSTRAINT fk_customer_id
--         FOREIGN KEY (customer_id)
--         REFERENCES customer (id)
-- );

-- INSERT INTO customer_profile(isloggedin,customer_id)
-- VALUES (TRUE, (SELECT id FROM customer WHERE first_name = 'John')),
-- (FALSE, (SELECT id FROM customer WHERE first_name = 'Jerome'));

-- SELECT first_name 
-- FROM customer
-- INNER JOIN customer_profile
-- ON customer_profile.customer_id = customer.id
-- WHERE customer_profile.isloggedin = TRUE

-- SELECT customer.first_name, customer_profile.isloggedin
-- FROM customer
-- FULL JOIN customer_profile
-- ON customer_profile.customer_id = customer.id

-- SELECT COUNT (*)
-- FROM customer
-- INNER JOIN customer_profile
-- ON customer_profile.customer_id = customer.id
-- WHERE customer_profile.isloggedin = FALSE OR customer_profile.isloggedin = NULL


-- PART 2

-- CREATE TABLE book(
-- book_id SERIAL PRIMARY KEY,
-- title VARCHAR(50) NOT NULL,
-- author VARCHAR(100) NOT NULL
-- );
-- INSERT INTO book (title, author)
-- VALUES ('Alice In Wonderland','Lewis Carroll'),
-- ('Harry Potter','J.K Rowling'),
-- ('To kill a mockingbird','Harper Lee');

-- SELECT * FROM book

-- CREATE TABLE student(
-- student_id SERIAL PRIMARY KEY,
-- name  VARCHAR(50) NOT NULL UNIQUE,
-- age INT 
-- CONSTRAINT chk_age_max
--         CHECK (age <= 15)
-- );

-- INSERT INTO student (name,age)
-- VALUES ('John', 12),('Lera',11),('Patrick',10),('Bob',14);

-- SELECT * FROM student

-- CREATE TABLE library(
-- book_fk_id INT NOT NULL,
-- student_fk_id INT NOT NULL,
-- borrowed_date DATE NOT NULL,

-- PRIMARY KEY (book_fk_id, student_fk_id),

-- CONSTRAINT fk_book
-- FOREIGN KEY (book_fk_id)
-- REFERENCES book (book_id)
-- ON DELETE CASCADE 
-- ON UPDATE CASCADE,

-- CONSTRAINT fk_student
-- FOREIGN KEY (student_fk_id)
-- REFERENCES student (student_id)
-- ON DELETE CASCADE 
-- ON UPDATE CASCADE
-- );


-- INSERT INTO library (student_fk_id,book_fk_id,borrowed_date)
-- VALUES ((SELECT student_id FROM student WHERE name = 'John'),
-- 		(SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
-- 		'15/02/2022'),
-- 		((SELECT student_id FROM student WHERE name = 'Bob'),
-- 		(SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
-- 		'03/03/2021'),
-- 		((SELECT student_id FROM student WHERE name = 'Lera'),
-- 		(SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
-- 		'23/05/2021'),
-- 		((SELECT student_id FROM student WHERE name = 'Bob'),
-- 		(SELECT book_id FROM book WHERE title = 'Harry Potter'),
-- 		'12/08/2021');
		
-- SELECT * FROM library

-- SELECT student.name , book.title
-- FROM student
-- INNER JOIN library
-- ON library.student_fk_id = student.student_id
-- INNER JOIN book
-- ON book.book_id = library.book_fk_id

-- SELECT AVG(student.age)
-- FROM student
-- INNER JOIN library
-- ON library.student_fk_id = student.student_id
-- INNER JOIN book
-- ON book.book_id = library.book_fk_id
-- WHERE book.title = 'Alice In Wonderland'

-- SELECT * FROM student
-- DELETE FROM student WHERE name = 'John';
-- SELECT * FROM student

--EVERY THING THAT HAS A REFFRES OF "JOHN WILL BE DELETED BECAUSE ITS CASCADED"
-- SELECT student.name , book.title
-- FROM student
-- INNER JOIN library
-- ON library.student_fk_id = student.student_id
-- INNER JOIN book
-- ON book.book_id = library.book_fk_id














