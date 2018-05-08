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
);

CREATE TABLE events(
    event_id SERIAL PRIMARY KEY,
    date timestamp not null default CURRENT_TIMESTAMP,
    event_type VARCHAR,
    donors VARCHAR[],
    rescuers VARCHAR[],
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