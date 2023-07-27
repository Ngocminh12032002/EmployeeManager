create table departments
(
    id   int auto_increment comment 'id'
        primary key,
    name varchar(50) charset utf8mb3 null
);

create table employees
(
    id           int auto_increment
        primary key,
    name         varchar(50) charset utf8mb3 null,
    createdAt    datetime                    null,
    updatedAt    datetime                    null,
    departmentId int                         not null,
    age          int                         null,
    phoneNumber  varchar(50) charset utf8mb3 null,
    role         varchar(20) charset utf8mb3 not null,
    constraint employees___fk
        foreign key (departmentId) references departments (id)
);

create table accounts
(
    id         int auto_increment
        primary key,
    username   varchar(50) charset utf8mb3 null,
    loginBy    varchar(50) charset utf8mb3 null,
    employeeId int                         not null,
    createdAt  timestamp                   null,
    updatedAt  timestamp                   null,
    constraint accounts_employees_id_fk
        foreign key (employeeId) references employees (id)
);

