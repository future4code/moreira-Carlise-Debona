```
CREATE TABLE Actors (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);
```

```
INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);
```

```
INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

```

INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Juliana Paes",
  2000000,
  "1990-11-14", 
  "female"
);
```

```
INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

```
INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES(
  "005",
  "Dj Alok",
  400000,
  "1949-04-18", 
  "male"
);
```

```
INSERT INTO Actors (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Juliana Paes",
  71933333,
  "1979-03-26", 
  "female"
);
```

```
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT,
    release_of_date DATE NOT NULL,
    evaluation FLOAT NOT NULL
);
```

```
INSERT INTO Movies (id, name, synopsis, release_of_date, evaluation)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7
);
```

```
INSERT INTO Movies (id, name, synopsis, release_of_date, evaluation)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10
);
```

```
INSERT INTO Movies (id, name, synopsis, release_of_date, evaluation)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
que só quer saber de farras e jogatina nas boates. A vida de abusos 
acaba por acarretar sua morte precoce.",
"2017-11-02",
8
);
```

```
INSERT INTO Movies (id, name, synopsis, release_of_date, evaluation)
VALUES(
"004",
"Dois Filhos de Franscisco",
"Francisco é um lavrador do interior de Goiás que sonha transformar seus dois filhos, 
Mirosmar e Emival, em uma famosa dupla sertaneja. Em meio a muitos percalços, 
um empresário consegue fazer deles um sucesso no interior do Brasil, 
até que um acidente interrompe a carreira da dupla. Anos mais tarde, Mirosmar 
transforma-se em Zezé Di Camargo, mas a fama só chega quando ele se junta 
ao irmão Welson (Luciano), o parceiro perfeito para concretizar a profecia de seu pai.",
"2005-08-19",
8
);
```

```
CREATE TABLE Teste (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```

```
SELECT * FROM Movies;
```

```
SELECT * FROM Teste;
```
### Exercício 1
#### a) a chave entrageira é a FOREIGN KEY para ligar uma tabela na outra
#### b) 
```
INSERT INTO Teste (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Muito bom!",
    7,
	"002"
);
```

```
INSERT INTO Teste (id, comment, rate, movie_id) 
VALUES (
	"003",
    "Nota mil!",
    7,
	"001"
);
```

```
INSERT INTO Teste (id, comment, rate, movie_id) 
VALUES (
	"006",
    "Chato!",
    0,
	"003"
);
```

#### c)
```
INSERT INTO Teste (id, comment, rate, movie_id) 
VALUES (
	"002",
    "Muito bom ótimo!",
    7,
	"005"
);
```

#### d)
```
ALTER TABLE Movies DROP COLUMN evaluation;
```

#### e) ele não vai apagar nada porque eu exclui a coluna evaluation.
```
SET SQL_SAFE_UPDATES = 0;
```

```
DELETE FROM Movies WHERE name = "Doce de mãe";
```

```
ALTER TABLE Movies ADD evaluation FLOAT NOT NULL;
```

```
UPDATE Movies SET evaluation = 8 WHERE id = "003";
```

### Exercício 2
```
CREATE TABLE MoviesCasts (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actors(id)
);
```

```
SELECT * FROM MoviesCasts;
```

#### a) ele junta as tabelas de actor e movies criando uma nova tabela só com a coluna movie_id e actor_id. 

#### b)
```
SELECT * FROM Actors;
INSERT INTO MoviesCasts(movie_id, actor_id)
VALUES(
	"001",
    "006"
);
```

```
INSERT INTO MoviesCasts(movie_id, actor_id)
VALUES(
	"002",
    "005"
);
```

```
INSERT INTO MoviesCasts(movie_id, actor_id)
VALUES(
	"003",
    "004"
);
```

```
INSERT INTO MoviesCasts(movie_id, actor_id)
VALUES(
	"004",
    "003"
);
```

```
INSERT INTO MoviesCasts(movie_id, actor_id)
VALUES(
	"005",
    "002"
);
```

```
INSERT INTO MoviesCasts(movie_id, actor_id)
VALUES(
	"006",
    "001"
);
```
#### c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails. 
```
INSERT INTO MoviesCasts(movie_id, actor_id)
VALUES(
	"020",
    "0030"
);
```

#### d) ele não vai por estar relacionado.
```
SELECT * FROM MoviesCasts;
```
```

DELETE FROM Actors WHERE name = "Fernanda Montenegro";
```

### Exercício 3
```
SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```

#### a) a junção da onde tiver relações entre as tabelas

#### b)
```
SELECT m.id as movie_id, r.rate as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;
```