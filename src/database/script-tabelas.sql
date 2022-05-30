-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/* para workbench - local - desenvolvimento */
create database bedTime;
use bedTime;

create table horaEscolhida(idHora int primary key auto_increment,
<<<<<<< HEAD
	hora varchar(6),
    selecao char(8),
    check (selecao = 'dormir' or selecao = 'acordar'));    
insert into horaEscolhida (hora, selecao) values ('22:30', 'dormir'),
('23:30', 'dormir'),
('23:30', 'dormir'),
('07:00', 'acordar');

create table usuario (idUsuario int primary key auto_increment,
=======
	hora time);
create table usario (idUsuario int primary key auto_increment,
>>>>>>> origin
	nome varchar(45),
    email varchar (90),
    senha varchar(14),
    genero char(1),
<<<<<<< HEAD
	check (genero = 'm' or genero = 'f' or genero ='o'));
=======
	check (genero = 'm' or 'f' or 'o'),
    fkHora int,
    foreign key (fkHora) references horaEscolhida(idHora));
>>>>>>> origin
    
insert into usuario(nome, email, senha, genero) values 
('Carla', 'carla@hotmailcom', '1234', 'f'),
('Carlos', 'carlos@hotmailcom', '1234', 'm'),
('Daniel', 'daniel@hotmailcom', '1234', 'm'),
('Rodrigo', 'rodrigo@hotmailcom', '1234', 'o');
create table recursiva(fkUsuario int,
foreign key (fkUsuario) references usuario(idUsuario),
fkHora int,
foreign key (fkHora) references horaEscolhida(idHora));
insert into recursiva values ('1','1'), ('2','2'), ('3','3'), ('4','4');

/* para sql server - remoto - produção */

CREATE TABLE usuario (
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
);

CREATE TABLE aviso (
	id INT PRIMARY KEY IDENTITY(1,1),
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT FOREIGN KEY REFERENCES usuario(id)
); 

CREATE TABLE medida (
	id INT PRIMARY KEY IDENTITY(1,1),
	temperatura DECIMAL,
	umidade DECIMAL,
	momento DATETIME,
	fk_aquario INT
);


