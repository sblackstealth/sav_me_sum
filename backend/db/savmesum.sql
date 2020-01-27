DROP DATABASE IF EXISTS savmesumdb;
CREATE DATABASE savmesumdb;

\c savmesumdb

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL,
    email VARCHAR,
    user_type VARCHAR,
    user_level INTEGER,
    is_veg BOOLEAN,
    good_standing BOOLEAN,
    user_events VARCHAR[],
    user_donations VARCHAR[],
    needs_training BOOLEAN,
    training_count VARCHAR);

CREATE TABLE events_d (
    event_id SERIAL PRIMARY KEY,
    event_start timestamp not null default CURRENT_TIMESTAMP,
    event_end timestamp,
    event_borough VARCHAR,
    event_location VARCHAR,
    event_zipcode VARCHAR,
    event_name VARCHAR,
    email VARCHAR,
    event_type VARCHAR,
    donors VARCHAR[],
    rescuers VARCHAR[],
    is_veg BOOLEAN DEFAULT false,
    attending_foodies VARCHAR[],
    standby_foodies VARCHAR[],
    donations VARCHAR[],
    event_closed BOOLEAN,
    number_of_foodies VARCHAR,
    number_of_helping_hands VARCHAR,
    number_of_portions VARCHAR,
    portions_rescued VARCHAR,
    attending_helping_hands VARCHAR[],
    standby_helping_hands VARCHAR[]);

    CREATE TABLE events_r (
    event_id SERIAL PRIMARY KEY,
    event_start timestamp not null default CURRENT_TIMESTAMP,
    event_end timestamp,
    event_borough VARCHAR,
    event_location VARCHAR,
    event_zipcode VARCHAR,
    event_name VARCHAR,
    email VARCHAR,
    event_type VARCHAR,
    donors VARCHAR[],
    rescuers VARCHAR[],
    is_veg BOOLEAN DEFAULT false,
    attending_foodies VARCHAR[],
    standby_foodies VARCHAR[],
    donations VARCHAR[],
    event_closed BOOLEAN,
    number_of_foodies VARCHAR,
    number_of_helping_hands VARCHAR,
    number_of_portions VARCHAR,
    portions_rescued VARCHAR,
    attending_helping_hands VARCHAR[],
    standby_helping_hands VARCHAR[]);

CREATE TABLE dates(
    event_number SERIAL PRIMARY KEY,
    event_id SERIAL REFERENCES events (event_id),
    event_start timestamp not null default CURRENT_TIMESTAMP,
    event_end TIMESTAMP default NULL,
    event_closed BOOLEAN DEFAULT false);

CREATE TABLE donations(
    donation_number SERIAL PRIMARY KEY,
    donation_id VARCHAR, 
    donation_name VARCHAR, 
    user_id SERIAL REFERENCES users (user_id),
    donor_name VARCHAR,
    allergens VARCHAR[],
    is_veg BOOLEAN,
    rescuers VARCHAR[],
    pass_check BOOLEAN,
    events_servedat VARCHAR[]);




INSERT INTO users(user_name, password, email, user_type, user_level, is_veg, good_standing, user_events, user_donations, needs_training, training_count)
VALUES ('Starbucks', '$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq', 'starbucks1@gmail.com', 'donor', 1, false, true, null, null,false , 0),
 ('Food kitchen1', '$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq', 'Foodkitchen1@gmail.com', 'rescuer', 3, false, true, null, null,false , 3),
 ('Elon', '$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq', 'Elon1@gmail.com', 'volunteer', 1, false, true, null, null,false , 4),
 ('Donny', '$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq', 'Donny1@gmail.com', 'foodie', 3, true, true, null, null,false , 0),
 ('Chipotle', '$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq', 'Chipotle1@gmail.com', 'donor', 1, false, true, null, null,false , 3),
 ('Church', '$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq', 'Church1@gmail.com', 'rescuer', 1, false, true, null, null,false , 0),
 ('Eric', '$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq', 'Eric1@gmail.com', 'volunteer', 1, false, false, null, null,false , 5),
 ('Andre', '$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq', 'Andre1@gmail.com', 'foodie', 4, false, false, null, null,false , 1),
 ('Chicpea', '$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq', 'Chicpea1@gmail.com', 'donor', 2, true, true, null, null,false , 0),
 ('Marlon', '$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq', 'Marlon1@gmail.com', 'foodie', 4, false, true, null, null,false , 1);

INSERT INTO events_d(event_borough,event_location, event_zipcode, event_name, email, event_type, donors,rescuers,is_veg,attending_foodies, standby_foodies, donations, event_closed, number_of_foodies, number_of_helping_hands, number_of_portions, portions_rescued, attending_helping_hands, standby_helping_hands)
VALUES ('bronx','1460 grand concourse', '10451', 'thursday dinner at the food kitchen bronx', 'Foodkitchen1@gmail.com', 'distribution', ARRAY['Starbucks', 'Chicpea'],ARRAY['Food kitchen1'],true, ARRAY['Donny'], ARRAY['Andre'],ARRAY['bagels','parfait','hummus', 'falafel'], false, 1, 2, 6, 3, ARRAY['Elon'], ARRAY['Eric']),
 ('bronx','1 getting money plaza', '10451','thursday evening rescue bronx','starbucks1@gmail.com','rescue', ARRAY['starbucks'],ARRAY['Food kitchen1'],False, null,null,ARRAY['bagels','parfait','chocolate milk'], true, 1, 2, 6, 6, null,null ),
 ('bronx','3 getting money plaza', '10451','thursday close rescue chipotle bronx','chipotle1@gmail.com','rescue' ,  ARRAY['chipotle'],ARRAY['Church'],False, null, null, ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', 'tortilia wrap', 'sour cream', 'guacamole', 'cheese', 'lettuce'], true, 1, 2, 6, 6, null,null),
 ('bronx','5 getting money plaza', '10451','safe supper bronx','church1@gmail.com','distribution', ARRAY['chipotle'],ARRAY['Church'],False, ARRAY['Marlon'],ARRAY['Andre'],ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', 'tortilia wrap', 'sour cream', 'guacamole', 'cheese', 'lettuce'], true, 1, 2, 6, 6, ARRAY['Elon'], ARRAY['Eric']),
 ('manhattan','1460 grand concourse', '10451','thursday dinner at the food kitchen', 'Foodkitchen1@gmail.com', 'distribution', ARRAY['Starbucks', 'Chicpea'],ARRAY['Food kitchen1'],true, ARRAY['Donny'], ARRAY['Andre'],ARRAY['bagels','parfait','hummus', 'falafel'], false, 1, 2, 6, 3, ARRAY['Elon'], ARRAY['Eric']),
 ('manhattan','1 getting money plaza', '10451','thursday evening rescue','starbucks1@gmail.com','rescue', ARRAY['starbucks'],ARRAY['Food kitchen1'],False, null,null,ARRAY['bagels','parfait','chocolate milk'], true, 1, 2, 6, 6, null,null ),
 ('manhattan','3 getting money plaza', '10451','thursday close rescue','chipotle1@gmail.com','rescue' ,  ARRAY['chipotle'],ARRAY['Church'],False, null, null, ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', 'tortilia wrap', 'sour cream', 'guacamole', 'cheese', 'lettuce'], true, 1, 2, 6, 6, null,null),
 ('manhattan','5 getting money plaza', '10451','safe supper','church1@gmail.com','distribution', ARRAY['chipotle'],ARRAY['Church'],False, ARRAY['Marlon'],ARRAY['Andre'],ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', 'tortilia wrap', 'sour cream', 'guacamole', 'cheese', 'lettuce'], true, 1, 2, 6, 6, ARRAY['Elon'], ARRAY['Eric']),
 ('staten island','1460 grand concourse', '10451', 'thursday dinner at the food kitchen', 'Foodkitchen1@gmail.com', 'distribution', ARRAY['Starbucks', 'Chicpea'],ARRAY['Food kitchen1'],true, ARRAY['Donny'], ARRAY['Andre'],ARRAY['bagels','parfait','hummus', 'falafel'], false,1, 2, 6, 3, ARRAY['Elon'], ARRAY['Eric']),
 ('staten island','1 getting money plaza', '10451','thursday evening rescue','starbucks1@gmail.com','rescue', ARRAY['starbucks'],ARRAY['Food kitchen1'],False, null,null,ARRAY['bagels','parfait','chocolate milk'], true, 1, 2, 6, 6, null,null ),
 ('staten island','3 getting money plaza', '10451','thursday close rescue','chipotle1@gmail.com','rescue' ,  ARRAY['chipotle'],ARRAY['Church'],False, null, null, ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', 'tortilia wrap', 'sour cream', 'guacamole', 'cheese', 'lettuce'], true, 1, 2, 6, 6, null,null),
 ('staten island','5 getting money plaza', '10451','safe supper','church1@gmail.com','distribution', ARRAY['chipotle'],ARRAY['Church'],False, ARRAY['Marlon'],ARRAY['Andre'],ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', 'tortilia wrap', 'sour cream', 'guacamole', 'cheese', 'lettuce'], true, 1, 2, 6, 6, ARRAY['Elon'], ARRAY['Eric']);
 
INSERT INTO events_r(event_borough,event_location, event_zipcode, event_name, email, event_type, donors,rescuers,is_veg,attending_foodies, standby_foodies, donations, event_closed, number_of_foodies, number_of_helping_hands, number_of_portions, portions_rescued, attending_helping_hands, standby_helping_hands)
VALUES ('bronx','1460 grand concourse', '10451', 'thursday dinner at the food kitchen bronx', 'Foodkitchen1@gmail.com', 'distribution', ARRAY['Starbucks', 'Chicpea'],ARRAY['Food kitchen1'],true, ARRAY['Donny'], ARRAY['Andre'],ARRAY['bagels','parfait','hummus', 'falafel'], false, 1, 2, 6, 3, ARRAY['Elon'], ARRAY['Eric']),
 ('bronx','1 getting money plaza', '10451','thursday evening rescue bronx','starbucks1@gmail.com','rescue', ARRAY['starbucks'],ARRAY['Food kitchen1'],False, null,null,ARRAY['bagels','parfait','chocolate milk'], true, 1, 2, 6, 6, null,null ),
 ('bronx','3 getting money plaza', '10451','thursday close rescue chipotle bronx','chipotle1@gmail.com','rescue' ,  ARRAY['chipotle'],ARRAY['Church'],False, null, null, ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', 'tortilia wrap', 'sour cream', 'guacamole', 'cheese', 'lettuce'], true, 1, 2, 6, 6, null,null),
 ('bronx','5 getting money plaza', '10451','safe supper bronx','church1@gmail.com','distribution', ARRAY['chipotle'],ARRAY['Church'],False, ARRAY['Marlon'],ARRAY['Andre'],ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', 'tortilia wrap', 'sour cream', 'guacamole', 'cheese', 'lettuce'], true, 1, 2, 6, 6, ARRAY['Elon'], ARRAY['Eric']),
 ('manhattan','1460 grand concourse', '10451','thursday dinner at the food kitchen', 'Foodkitchen1@gmail.com', 'distribution', ARRAY['Starbucks', 'Chicpea'],ARRAY['Food kitchen1'],true, ARRAY['Donny'], ARRAY['Andre'],ARRAY['bagels','parfait','hummus', 'falafel'], false, 1, 2, 6, 3, ARRAY['Elon'], ARRAY['Eric']),
 ('manhattan','1 getting money plaza', '10451','thursday evening rescue','starbucks1@gmail.com','rescue', ARRAY['starbucks'],ARRAY['Food kitchen1'],False, null,null,ARRAY['bagels','parfait','chocolate milk'], true, 1, 2, 6, 6, null,null ),
 ('manhattan','3 getting money plaza', '10451','thursday close rescue','chipotle1@gmail.com','rescue' ,  ARRAY['chipotle'],ARRAY['Church'],False, null, null, ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', 'tortilia wrap', 'sour cream', 'guacamole', 'cheese', 'lettuce'], true, 1, 2, 6, 6, null,null),
 ('manhattan','5 getting money plaza', '10451','safe supper','church1@gmail.com','distribution', ARRAY['chipotle'],ARRAY['Church'],False, ARRAY['Marlon'],ARRAY['Andre'],ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', 'tortilia wrap', 'sour cream', 'guacamole', 'cheese', 'lettuce'], true, 1, 2, 6, 6, ARRAY['Elon'], ARRAY['Eric']),
 ('staten island','1460 grand concourse', '10451', 'thursday dinner at the food kitchen', 'Foodkitchen1@gmail.com', 'distribution', ARRAY['Starbucks', 'Chicpea'],ARRAY['Food kitchen1'],true, ARRAY['Donny'], ARRAY['Andre'],ARRAY['bagels','parfait','hummus', 'falafel'], false,1, 2, 6, 3, ARRAY['Elon'], ARRAY['Eric']),
 ('staten island','1 getting money plaza', '10451','thursday evening rescue','starbucks1@gmail.com','rescue', ARRAY['starbucks'],ARRAY['Food kitchen1'],False, null,null,ARRAY['bagels','parfait','chocolate milk'], true, 1, 2, 6, 6, null,null ),
 ('staten island','3 getting money plaza', '10451','thursday close rescue','chipotle1@gmail.com','rescue' ,  ARRAY['chipotle'],ARRAY['Church'],False, null, null, ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', 'tortilia wrap', 'sour cream', 'guacamole', 'cheese', 'lettuce'], true, 1, 2, 6, 6, null,null),
 ('staten island','5 getting money plaza', '10451','safe supper','church1@gmail.com','distribution', ARRAY['chipotle'],ARRAY['Church'],False, ARRAY['Marlon'],ARRAY['Andre'],ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', 'tortilia wrap', 'sour cream', 'guacamole', 'cheese', 'lettuce'], true, 1, 2, 6, 6, ARRAY['Elon'], ARRAY['Eric']);


INSERT INTO dates (event_id, event_start, event_closed )
VALUES (1, 'thursday july 8 2019',true),
 (2,'thursday july 8 2019',true),
 (3,'thursday july 8 2019',true),
 (4,'thursday july 8 2019',true),
 (5,'thursday july 8 2019',true),
 (6,'thursday july 8 2019',true),
 (7, 'thursday july 8 2019',true),
 (8,'thursday july 8 2019',true),
 (9, 'thursday july 8 2019',true),
 (10,'thursday july 8 2019',true),
 (11, 'thursday july 8 2019',true),
 (12,'thursday july 8 2019',true);


INSERT INTO donations (donation_number, donation_id, donation_name, user_id, donor_name,allergens,is_veg, rescuers,pass_check, events_servedat)
VALUES (1,1,'bagels', 1, 'Starbucks', ARRAY['gluetin'],true ,ARRAY['food kitchen1'], true, null),
 (2,1,'parfait', 1, 'Starbucks', null,true,ARRAY['food kitchen1'], true, null),
 (3,1, 'chocolate milk', 1, 'Starbucks', ARRAY['lactose'],'false',ARRAY['food kitchen1'], true, null),
 (4,2, 'chicken', 5, 'Chipotle', null,'false',ARRAY['Church'], true, null);

