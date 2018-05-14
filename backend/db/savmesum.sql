DROP DATABASE IF EXISTS savmesumdb;
CREATE DATABASE savmesumdb;

\c savmesumdb

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    email VARCHAR,
    user_type VARCHAR,
    user_level VARCHAR,
    is_veg BOOLEAN,
    good_standing BOOLEAN,
    user_events VARCHAR[],
    needs_training BOOLEAN,
    training_count VARCHAR,
);

CREATE TABLE events(
    event_id SERIAL PRIMARY KEY,
    date timestamp not null default CURRENT_TIMESTAMP,
    event_borough VARCHAR,
    event_location VARCHAR,
    event_name VARCHAR,
    email VARCHAR,
    event_type VARCHAR,
    donors VARCHAR[],
    rescuers VARCHAR[],
    is_veg BOOLEAN,
    attending_foodies VARCHAR[],
    standby_foodies VARCHAR[],
    donations VARCHAR[],
    event_close VARCHAR[],
    number_ofportions VARCHAR
)

CREATE TABLE dates(
    event_number SERIAL PRIMARY KEY,
    event_id FOREIGN KEY,
    event_date
    event_closed BOOLEAN,
)

CREATE TABLE donations(
    donation_number SERIAL PRIMARY KEY,
    donation_name VARCHAR,
    donor_name VARCHAR,
    allergens VARCHAR[],
    is_veg BOOLEAN,
    rescuers VARCHAR[],
    events_servedat VARCHAR[],
)

INSERT INTO users (user_id,user_name)