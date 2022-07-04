-- from the terminal run:
-- psql < air_traffic.sql

DROP DATABASE IF EXISTS air_traffic;

CREATE DATABASE air_traffic;

\c air_traffic

CREATE TABLE passangers 
(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);

CREATE TABLE airlines
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE countries 
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE tickets
(
  id SERIAL PRIMARY KEY,
  passanger_id INTEGER NOT NULL REFERENCES passangers,
  seat TEXT NOT NULL,
  departure TIMESTAMP NOT NULL,
  arrival TIMESTAMP NOT NULL,
  airline_id INTEGER NOT NULL REFERENCES airlines,
  from_city TEXT NOT NULL,
  from_country_id INTEGER NOT NULL REFERENCES countries,
  to_city TEXT NOT NULL,
  to_country_id INTEGER NOT NULL REFERENCES countries
);

INSERT INTO passangers 
    (first_name, last_name)
VALUES 
    ('Jennifer', 'Finch'),
    ('Thadeus', 'Gathercoal'),
    ('Sonja', 'Pauley'),
    ('Waneta', 'Skeleton'),
    ('Berkie', 'Wycliff'),
    ('Alvin', 'Leathes'),
    ('Cory', 'Squibbes');

INSERT INTO airlines
    (name)
VALUES 
    ('United'),
    ('British Airways'),
    ('Delta'),
    ('TUI Fly Belgium'),
    ('Air China'),
    ('American Airlines'),
    ('Avianca Brasil');

INSERT INTO countries
    (name)
VALUES 
('United States'),
('United Kingdom'),
('Mexico'),
('Morocco'),
('China'),
('Chile'),
('Japan'),
('France'),
('UAE'),
('Brazil');

INSERT INTO tickets
  (passanger_id, seat, departure, arrival, airline_id, from_city, from_country_id, to_city, to_country_id)
VALUES
  (1, '33B', '2018-04-08 09:00:00', '2018-04-08 12:00:00', 1, 'Washington DC', 1, 'Seattle',1 ),
  (2, '8A', '2018-12-19 12:45:00', '2018-12-19 16:15:00', 2, 'Tokyo',7 , 'London', 2),
  (3, '12F', '2018-01-02 07:00:00', '2018-01-02 08:03:00', 3, 'Los Angeles', 1, 'Las Vegas', 1),
  (1, '20A', '2018-04-15 16:50:00', '2018-04-15 21:00:00', 3, 'Seattle', 1, 'Mexico City', 3),
  (4, '23D', '2018-08-01 18:30:00', '2018-08-01 21:50:00', 4, 'Paris', 8, 'Casablanca', 4),
  (2, '18C', '2018-10-31 01:15:00', '2018-10-31 12:55:00', 5, 'Dubai', 9, 'Beijing', 5),
  (5, '9E', '2019-02-06 06:00:00', '2019-02-06 07:47:00', 1, 'New York', 1, 'Charlotte', 1),
  (6, '1A', '2018-12-22 14:42:00', '2018-12-22 15:56:00', 6, 'Cedar Rapids', 1, 'Chicago', 1),
  (5, '32B', '2019-02-06 16:28:00', '2019-02-06 19:18:00', 6, 'Charlotte', 1, 'New Orleans', 1),
  (7, '10D', '2019-01-20 19:30:00', '2019-01-20 22:45:00', 7, 'Sao Paulo', 10, 'Santiago', 6);