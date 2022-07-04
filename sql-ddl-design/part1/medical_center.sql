DROP DATABASE IF EXISTS medical_center;

CREATE DATABASE medical_center;

\c medical_center

CREATE TABLE doctors
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  specialty TEXT NOT NULL
);

CREATE TABLE patients
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  insurance TEXT NOT NULL,
  dob DATE NOT NULL
);

CREATE TABLE visits
(
  id SERIAL PRIMARY KEY,
  doctor_id INTEGER NOT NULL REFERENCES doctors,
  patient_id INTEGER NOT NULL REFERENCES patients
);

CREATE TABLE diseases
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL
);

CREATE TABLE diagnoses
(
  id SERIAL PRIMARY KEY,
  visit_id INTEGER NOT NULL REFERENCES visits,
  disease_id INTEGER NOT NULL REFERENCES diseases,
  notes TEXT 
);