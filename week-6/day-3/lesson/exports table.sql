-- CREATE TABLE friends(
-- char_id SERIAL PRIMARY KEY,
-- first_name VARCHAR (50),
-- last_name VARCHAR (100)
-- )


COPY actors(actor_id, first_name,last_name) 
TO 'C:\Users\Public\actors_export.csv' DELIMITER ',' CSV HEADER;