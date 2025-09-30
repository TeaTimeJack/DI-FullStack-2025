-- CREATE TABLE FirstTab (
--      id integer, 
--      name VARCHAR(10)
-- );

-- INSERT INTO FirstTab VALUES
-- (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish'),
-- (NULL,'Avtaar');

-- SELECT * FROM FirstTab

-- CREATE TABLE SecondTab (
--     id integer 
-- );

-- INSERT INTO SecondTab VALUES
-- (5),
-- (NULL);


-- SELECT * FROM SecondTab


-- q1: the OUTPUT of the following statement - (cant compare NULL) - 0
-- q2: the OUTPUT of the following statement - (Sharlee,Krish) - 2
-- q3: the OUTPUT of the following statement - (cant compare NULL) -0
-- q4: the OUTPUT of the following statement - (Sharlee,Krish) - 2

   -- SELECT COUNT(*) 
   --  FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
   -- SELECT COUNT(*) 
   --  FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )
    -- SELECT COUNT(*) 
    -- FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
	 -- SELECT COUNT(*) 
  --   FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )












