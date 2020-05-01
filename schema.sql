DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

\c reviews;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  fullname VARCHAR(50) NOT NULL,
  username VARCHAR(30) UNIQUE NOT NULL,
  avatar TEXT NOT NULL
);

CREATE TABLE rooms (
  id SERIAL PRIMARY KEY,
  room_identification INT NOT NULL
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL,
  roomId INT NOT NULL,
  datePublished DATE NOT NULL,
  comment TEXT NOT NULL,
  checkin_rating DECIMAL NOT NULL,
  accuracy_rating DECIMAL NOT NULL,
  value_rating DECIMAL NOT NULL,
  communication_rating DECIMAL NOT NULL,
  cleanliness_rating DECIMAL NOT NULL,
  location_rating DECIMAL NOT NULL
);

