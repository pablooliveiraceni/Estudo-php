CREATE DATABASE recode;

CREATE TABLE recode.students (
    id int not null PRIMARY KEY AUTO_INCREMENT,
    name varchar(80) not null,
    telphone varchar(30)
);