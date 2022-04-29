CREATE TABLE users (
  username VARCHAR(25) PRIMARY KEY,
  password TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);


CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  category TEXT UNIQUE NOT NULL,
  image TEXT,
  description TEXT NOT NULL
);

CREATE TABLE meals (
  id SERIAL PRIMARY KEY,
  meal TEXT NOT NULL,
  category TEXT,
  area TEXT ,
  instructions TEXT ,
  image TEXT,
  youtube TEXT,
  reviews TEXT,
  likes TEXT,
  username VARCHAR(25) 
    REFERENCES users ON DELETE CASCADE,
  category_id INTEGER  REFERENCES categories ON DELETE CASCADE

);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  review TEXT NOT NULL,
  username VARCHAR(25) NOT NULL
    REFERENCES users ON DELETE CASCADE,
  meal_id INTEGER NOT NULL
    REFERENCES meals ON DELETE CASCADE

);

CREATE TABLE likes(
  username VARCHAR(25)
    REFERENCES users ON DELETE CASCADE, 
  meal_id INTEGER
    REFERENCES meals ON DELETE CASCADE,
  PRIMARY KEY (username, meal_id)

);

-- CREATE TABLE comments (
--   id SERIAL PRIMARY KEY,
--   comment TEXT NOT NULL,
--   review_id INTEGER(25)
--     REFERENCES reviews ON DELETE CASCADE,
--   user_id INTEGER(25) NOT NULL
--     REFERENCES users ON DELETE CASCADE
-- );


-- CREATE TABLE starRating (
--   id SERIAL PRIMARY KEY,

-- );