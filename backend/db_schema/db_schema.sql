-- DROP existing TABLES, to clean out the database  = = = = =
DROP TABLE IF EXISTS managers;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS assignments;
DROP TABLE IF EXISTS tasks;
DROP TABLE IF EXISTS services;
DROP TABLE IF EXISTS artists;

DROP SEQUENCE IF EXISTS  managers_pk;
DROP SEQUENCE IF EXISTS  employees_pk;
DROP SEQUENCE IF EXISTS  assignments_pk;
DROP SEQUENCE IF EXISTS  tasks_pk;
DROP SEQUENCE IF EXISTS  artists_pk;
DROP SEQUENCE IF EXISTS  services_pk;

-- CREATE primary key SEQUENCES  = = = = = = = =
-- Note that all Primary Key sequences start at 100. PK ids < 100
-- are reserved for test data
CREATE SEQUENCE public.employees_pk
  INCREMENT 1
  START 100
  MINVALUE 1
;
CREATE SEQUENCE public.managers_pk
  INCREMENT 1
  START 100
  MINVALUE 1
;
CREATE SEQUENCE public.assignments_pk
  INCREMENT 1
  START 100
  MINVALUE 1
;
CREATE SEQUENCE public.tasks_pk
  INCREMENT 1
  START 100
  MINVALUE 1
;
CREATE SEQUENCE public.artists_pk
  INCREMENT 1
  START 100
  MINVALUE 1
;
CREATE SEQUENCE public.services_pk
  INCREMENT 1
  START 100
  MINVALUE 1
;

-- CREATE tables  = = = = = = = = =
CREATE TABLE public.managers
(
  id integer NOT NULL DEFAULT nextval('managers_pk'),
  join_timestamp timestamp,
  first_name text,
  last_name text,
  pin integer,
  PRIMARY KEY (id)
);

CREATE TABLE public.employees
(
  id integer NOT NULL DEFAULT nextval('employees_pk'),
  join_timestamp timestamp,
  first_name text,
  last_name text,
  points integer,
  pin integer,
  PRIMARY KEY (id)
);

CREATE TABLE public.assignments
(
  id integer NOT NULL DEFAULT nextval('assignments_pk'),
  employee_id integer,
  join_timestamp timestamp,
  time_specified text,
  time_expected text,
  completed boolean,
  time_completed timestamp,
  title text,
  PRIMARY KEY (id),
  FOREIGN KEY (employee_id) REFERENCES public.employees (id)
);

CREATE TABLE public.tasks
(
  id integer NOT NULL DEFAULT nextval('tasks_pk'),
  assignments_id integer,
  points integer,
  join_timestamp timestamp,
  time_completed timestamp,
  title text,
  completed boolean,
  PRIMARY KEY (id),
  FOREIGN KEY (assignments_id) REFERENCES public.assignments (id)
);

CREATE TABLE public.artists
(
  id integer NOT NULL DEFAULT nextval('artists_pk'),
  title text,
  image text,
  insta text,
  summary text,
  phone text,
  PRIMARY KEY (id)
);

CREATE TABLE public.services
(
  id integer NOT NULL DEFAULT nextval('services_pk'),
  artist_id integer,
  price integer,
  name text,
  description text,
  PRIMARY KEY (id),
  FOREIGN KEY (artist_id) REFERENCES public.artists (id)
);
-- INSERT test data  = = = = = = =
-- set up test data for managers

INSERT INTO public.managers
  (id,first_name,last_name,pin)
  VALUES(1,'Lizzy','Boss',1111);

-- set up test data for employees
INSERT INTO public.employees
  (id,first_name,last_name,pin)
  VALUES(1,'Chipi','Wilson',2222);

INSERT INTO public.employees
  (id,first_name,last_name,pin)
  VALUES(2,'Mason','Son',3333);

-- set up test data for assignments and assign to employee
INSERT INTO public.assignments
  (id,time_specified,time_expected,completed,employee_id,title)
  VALUES(1,'7:00am','4:00pm',false,1,'clean list');

INSERT INTO public.assignments
  (id,time_specified,time_expected,completed,employee_id,title)
  VALUES(2,'7:00am','12:00pm',false,2,'cleaning list');

--  set up test data for tasks for assignments
INSERT INTO public.tasks
  (id,completed,assignments_id,title,points)
  VALUES(1,false,1,'sanitize equipment',5);

INSERT INTO public.tasks
  (id,completed,assignments_id,title,points)
  VALUES(2,false,1,'sweep shop',5);

INSERT INTO public.tasks
  (id,completed,assignments_id,title,points)
  VALUES(3,false,2,'check on product',5);

INSERT INTO public.tasks
  (id,completed,assignments_id,title,points)
  VALUES(4,false,2,'get towels ready',5);

  -- set up test data for artists
INSERT INTO public.artists
  (id,title,image,insta,summary)
  VALUES(1,'Lead Barber','http://utahstories.com/wp-content/uploads/2017/02/trimblephoto307-259x400.jpg','instagram.com/@therevbarbershop',' E’Sau wields the scissors, clipping hair with jabs and hooks, while she dances around each customer. She talks in loud, quick gestures, her tattooed arms unfurling in all directions. Old liquor bottles fitted with spray nozzles line a shelf below a mirror. E’Sau’s been cutting for 24 years.');

INSERT INTO public.artists
  (id,title,image,insta,summary)
  VALUES(2,'Cosmotologist/Barber','https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQV-gmunOvHIeFsJVm_LJCBZm0hBtxxO3np8MDjZrzwUh0SH03Vow','instagram.com/@chipichik','Talented artist with 7 years of industry experience dedicated to quality and care of your image');

-- set up test data for services
INSERT INTO public.services
  (id,artist_id,price,name,description)
  VALUES(1,1,3000,'Mens Haircut','Traditional Straight Razor Neck Shave and Straight Razor Line-up Ending In a Hot Towel.');

INSERT INTO public.services
  (id,artist_id,price,name,description)
  VALUES(2,1,1500,'Kids Haircut','Little fellas cut 12 and under, detailed cut with line-up and classic neck shave');

INSERT INTO public.services
  (id,artist_id,price,name,description)
  VALUES(3,2,3000,'Womens haircut','Perfectly suited for you intended make styling a breeze');

INSERT INTO public.services
  (id,artist_id,price,name,description)
  VALUES(4,2,1000,'Waxing','Perfectly shaped brows.');
