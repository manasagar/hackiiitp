create table users(
	id serial primary key,
	firstName varchar(20) Not null ,
    lastName varchar(20) Not null,
	email varchar(50) Not null UNIQUE,
	password bytea not null unique
)

