-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "profile"
(
    "id" SERIAL PRIMARY KEY,
    "profile_type" int,
    "first_name" varchar(64),
    "last_name" varchar(64),
    "sex" int,
    "dob_or_age" text,
    "race" text,
    "address" text,
    "latitude" double precision,
    "longitude" double precision,
    "ems" text,
    "summary" text,
    "preference" jsonb,
    "interest" text,
    "l_parent" text,
    "l_parent_relationship_to_child" text,
    "b_employer" text,
    "b_occupation" text,
    "b_marital_status" text,
    "ready" boolean DEFAULT FALSE
);

CREATE TABLE "status"
(
    "id" SERIAL PRIMARY KEY,
    "big_id" int,
    "little_id" int,
    "match" boolean DEFAULT NULL,
    "review" int DEFAULT NULL,
    "comment" text
);

ALTER TABLE "status"
    ADD CONSTRAINT "unique_relationship_key"
    UNIQUE (big_id, little_id);

CREATE TABLE "user"
(
    "id" SERIAL PRIMARY KEY,
    "email" varchar(128),
    "password" varchar(1000),
    "admin" boolean DEFAULT FALSE
);

CREATE TABLE "review_type"
(
    "id" SERIAL PRIMARY KEY,
    "type" text
);

CREATE TABLE "sex_type"
(
    "id" SERIAL PRIMARY KEY,
    "type" text
);

CREATE TABLE "profile_type"
(
    "id" SERIAL PRIMARY KEY,
    "type" text
);

INSERT INTO "review_type"
    ("type")
VALUES
    ('unlikely'),
    ('maybe'),
    ('likely');

INSERT INTO "sex_type"
    ("type")
VALUES
    ('female'),
    ('male'),
    ('couple m/f');

INSERT INTO "profile_type"
    ("type")
VALUES
    ('big'),
    ('little'),
    ('couple');


