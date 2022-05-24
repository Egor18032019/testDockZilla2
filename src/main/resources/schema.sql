drop table if exists students cascade;
drop sequence if exists students_sequence;

create sequence students_sequence start 1 increment 1;
create table students
(
    id          bigint PRIMARY KEY DEFAULT nextval('students_sequence'),
    username    TEXT      NOT NULL,
    lastname    TEXT      NOT NULL,
    patronymic  TEXT      NOT NULL,
    dateofbrith timestamp NOT NULL,
    studygroup  TEXT      NOT NULL
)