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
    event_closed BOOLEAN,
    number_ofportions VARCHAR,
    portions_rescued VARCHAR,
    attending_helping_hands VARCHAR[],
    standby_helping_hands VARCHAR[],

)

CREATE TABLE dates(
    event_number SERIAL PRIMARY KEY,
    event_name FOREIGN KEY,
    event_date timestamp default CURRENT_TIMESTAMP
    event_closed BOOLEAN,
)

CREATE TABLE donations(
    donation_number SERIAL PRIMARY KEY,
    donation_id FOREIGN KEY,
    donation_name VARCHAR,
    donor_name VARCHAR,
    allergens VARCHAR[],
    is_veg BOOLEAN,
    rescuers VARCHAR[],
    pass_check BOOLEAN,
    events_servedat VARCHAR[],
)

INSERT INTO users (user_id,user_name,password, email, user_type,user_level,is_veg, good_standing, user_events, needs_training,training_count),
VALUES (1,"Starbucks","$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq","starbucks1@gmail.com","donor",1, "false", "true", ARRAY[],"false" , 0),
VALUES (2,"Food kitchen1","$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq","Foodkitchen1@gmail.com","rescuer",3, "false", "true", ARRAY[],"false" , 3),
VALUES (3,"Elon","$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq","Elon1@gmail.com","volunteer",1, "false", "true", ARRAY[],"false" , 4),
VALUES (4,"Donny","$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq","Donny1@gmail.com","foodie",3, "true", "true", ARRAY[],"false" , 0),
VALUES (5,"Chipotle","$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq","Chipotle1@gmail.com","donor",1, "false", "true", ARRAY[],"false" , 3),
VALUES (6,"Church","$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq","Church1@gmail.com","rescuer",1, "false", "true", ARRAY[],"false" , 0),
VALUES (7,"Eric","$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq","Eric1@gmail.com","volunteer",1, "false", "false", ARRAY[],"false" , 5),
VALUES (8,"Andre","$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq","Andre1@gmail.com","foodie",4, "false", "false", ARRAY[],"false" , 1),
VALUES (9,"Chicpea","$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq","Chicpea1@gmail.com","donor",2, "true", "true", ARRAY[],"false" , 0),
VALUES (10,"Marlon","$2a$10$.MVvgjXGDNY5BspJcHdfqOMr5oEu3AxYiIxjOu8aUiA0LBXlXIWEq","Marlon1@gmail.com","foodie",4, "false", "true", ARRAY[],"false" , 1);

INSERT INTO events (event_id,event_borough,event_location, event_name, email, event_type, donors,rescuers,is_veg,attending_foodies, standby_foodies, donations, event_closed, number_ofportions, portions_rescued, attending_helping_hands, standby_helping_hands),
VALUES (4,"bronx","1460 grand concourse", "thursday dinner at the food kitchen bronx", "Foodkitchen1@gmail.com", "distribution", ARRAY['Starbucks', 'Chicpea'],ARRAY['Food kitchen1'],"true", ARRAY['Donny'], ARRAY['Andre'],ARRAY['bagels','parfait','hummus', 'falafel'], false, 6, 3, ARRAY['Elon'], ARRAY['Eric']),
VALUES (1,"bronx","1 getting money plaza","thursday evening rescue bronx","starbucks1@gmail.com","rescue", ARRAY['starbucks'],ARRAY['Food kitchen1'],"False", null,null,ARRAY['bagels','parfait','chocolate milk'], true, 6, 6, null,null ),
VALUES (2, "bronx","3 getting money plaza","thursday close rescue chipotle bronx","chipotle1@gmail.com","rescue" ,  ARRAY['chipotle'],ARRAY['Church'],"False", null, null, ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', "tortilia wrap", 'sour cream', 'guacamole', 'cheese', 'lettuce', ], true, 6, 6, null,null),
VALUES (3,"bronx","5 getting money plaza","safe supper bronx","church1@gmail.com","distribution", ARRAY['chipotle'],ARRAY['Church'],"False", ARRAY['Marlon'],ARRAY['Andre'],ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', "tortilia wrap", 'sour cream', 'guacamole', 'cheese', 'lettuce', ], true, 6, 6, ARRAY['Elon'], ARRAY['Eric']),
VALUES (5,"manhattan","1460 grand concourse", "thursday dinner at the food kitchen", "Foodkitchen1@gmail.com", "distribution", ARRAY['Starbucks', 'Chicpea'],ARRAY['Food kitchen1'],"true", ARRAY['Donny'], ARRAY['Andre'],ARRAY['bagels','parfait','hummus', 'falafel'], false, 6, 3, ARRAY['Elon'], ARRAY['Eric']),
VALUES (6,"manhattan","1 getting money plaza","thursday evening rescue","starbucks1@gmail.com","rescue", ARRAY['starbucks'],ARRAY['Food kitchen1'],"False", null,null,ARRAY['bagels','parfait','chocolate milk'], true, 6, 6, null,null ),
VALUES (7, "manhattan","3 getting money plaza","thursday close rescue","chipotle1@gmail.com","rescue" ,  ARRAY['chipotle'],ARRAY['Church'],"False", null, null, ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', "tortilia wrap", 'sour cream', 'guacamole', 'cheese', 'lettuce', ], true, 6, 6, null,null),
VALUES (8,"manhattan","5 getting money plaza","safe supper","church1@gmail.com","distribution", ARRAY['chipotle'],ARRAY['Church'],"False", ARRAY['Marlon'],ARRAY['Andre'],ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', "tortilia wrap", 'sour cream', 'guacamole', 'cheese', 'lettuce', ], true, 6, 6, ARRAY['Elon'], ARRAY['Eric']),
VALUES (9,"staten island","1460 grand concourse", "thursday dinner at the food kitchen", "Foodkitchen1@gmail.com", "distribution", ARRAY['Starbucks', 'Chicpea'],ARRAY['Food kitchen1'],"true", ARRAY['Donny'], ARRAY['Andre'],ARRAY['bagels','parfait','hummus', 'falafel'], false, 6, 3, ARRAY['Elon'], ARRAY['Eric']),
VALUES (10,"staten island","1 getting money plaza","thursday evening rescue","starbucks1@gmail.com","rescue", ARRAY['starbucks'],ARRAY['Food kitchen1'],"False", null,null,ARRAY['bagels','parfait','chocolate milk'], true, 6, 6, null,null ),
VALUES (11, "staten island","3 getting money plaza","thursday close rescue","chipotle1@gmail.com","rescue" ,  ARRAY['chipotle'],ARRAY['Church'],"False", null, null, ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', "tortilia wrap", 'sour cream', 'guacamole', 'cheese', 'lettuce', ], true, 6, 6, null,null),
VALUES (12,"staten island","5 getting money plaza","safe supper","church1@gmail.com","distribution", ARRAY['chipotle'],ARRAY['Church'],"False", ARRAY['Marlon'],ARRAY['Andre'],ARRAY['shredded beef','steak', 'pork','chicken','white rice', 'brown rice', "tortilia wrap", 'sour cream', 'guacamole', 'cheese', 'lettuce', ], true, 6, 6, ARRAY['Elon'], ARRAY['Eric']);


INSERT INTO dates (event_number, event_name, event_date, event_closed  )
VALUES (1,"thursday evening rescue bronx" , "thursday, july 8 2018","true"),
VALUES (2,"thursday close rescue chipotle bronx","thursday, july 8 2018","true"),
VALUES (3, "safe supper bronx" "thursday, july 8 2018","true"),
VALUES (4, "thursday dinner at the food kitchen bronx","thursday, july 8 2018","true");
VALUES (5,"thursday evening rescue manhattan" , "thursday, july 8 2018","true"),
VALUES (6,"thursday close rescue chipotle manhattan","thursday, july 8 2018","true"),
VALUES (7, "safe supper manhattan" "thursday, july 8 2018","true"),
VALUES (8, "thursday dinner at the food kitchen manhattan","thursday, july 8 2018","true");
VALUES (9,"thursday evening rescue staten island" , "thursday, july 8 2018","true"),
VALUES (10,"thursday close rescue chipotle staten island","thursday, july 8 2018","true"),
VALUES (11, "safe supper staten island" "thursday, july 8 2018","true"),
VALUES (12, "thursday dinner at the food kitchen staten island","thursday, july 8 2018","true");


INSERT INTO donations (donation_number, donation_ id, donation_name, donor_name,allergens,is_veg, rescuers,pass_check, events_servedat)
VALUES (1,1,"bagels","starbucks", "gluetin","true",ARRAY["food kitchen1"], "true", 1),
VALUES (2,1,"parfait","starbucks", null,"true",ARRAY["food kitchen1"], "true", 1),
VALUES (3,1, "chocolate milk","starbucks", "lactose","false",ARRAY["food kitchen1"], "true", 1),
VALUES (4,2, "chicken","chipotle",null,"false",ARRAY["Church"], "true", 1);

