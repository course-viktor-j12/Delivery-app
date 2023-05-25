CREATE DATA food_delivery;

CREATE TABLE product(
    id INT PRIMARY KEY,
    name VARCHAR(30),
    -- title VARCHAR(30),
    price INT,
);

CREATE TABLE users(
    id INT PRIMARY KEY,
    email VARCHAR(255),
    phone INT,
    address VARCHAR(30),
);

-- CREATE TABLE basket(

-- );


-- INSERT INTO public.todos(
-- 	id, user_email, title, progress, date)
-- 	VALUES ("0", "viktor@example.com", "First todo", 10, "Fri Mar 24 2023 12:56:47 GMT+0200 (Eastern European Standard Time)");