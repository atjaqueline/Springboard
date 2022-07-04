DROP DATABASE IF EXISTS craigslist;

CREATE DATABASE craigslist;

\c craigslist

CREATE TABLE region
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  prefered_region_id INTEGER NOT NULL
);

CREATE TABLE categories
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE posts
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  text TEXT NOT NULL,
  location TEXT NOT NULL,
  user_id INTEGER NOT NULL REFERENCES users,
  region_id INTEGER NOT NULL REFERENCES region,
  category_id INTEGER NOT NULL REFERENCES categories
);



