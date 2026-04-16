create table member (
  mid       varchar(50)    primary key,
  mname    varchar(100)    not null,
  mpassword varchar(255)    not null,
  menabled    number(1)       not null,
  mrole    varchar(50)    not null,
  memail    varchar(255)    not null unique
);

insert into member values ('admin', '총관리자', '$2a$10$vI7tC2h4pDre.YqStwOl5uiT.H2bE/T5IkiZ0bDsWGw9wTgcDdUOa', 1, 'ROLE_ADMIN', 'admin@mycompany.com');
insert into member values ('manager', '관리자', '$2a$10$vI7tC2h4pDre.YqStwOl5uiT.H2bE/T5IkiZ0bDsWGw9wTgcDdUOa', 1, 'ROLE_MANAGER', 'manager@mycompany.com');
insert into member values ('user', '사용자', '$2a$10$vI7tC2h4pDre.YqStwOl5uiT.H2bE/T5IkiZ0bDsWGw9wTgcDdUOa', 1, 'ROLE_USER', 'user@mycompany.com');
commit;