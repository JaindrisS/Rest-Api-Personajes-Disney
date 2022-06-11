# Rest-Api-Personajes-Disney

Tecnologias utilizadas son: NodeJs, Express, Mongoose,Nodemailer-Sengrid,Cloudinary.

Esta API esta diseñada para:

- Personaje: Agregar, editar, eliminar, ver detalles de un personaje en especifico, filtrar por: nombre, peso, edad y participación en una pelicula o serie, ver listado de todos los personajes.

- Pelicula o serie: Agregar, editar, eliminar, ver detalles de una pelicula o serie, filtrar por genero y titulo de la pelicula, ordenar de forma ascendente o descendiente

- Genero: Agregar, editar, eliminar, ver deta y puedes usarla con los siguientes endpoints:

### Usuarios

| CRUD | RESPONSE    | ROUTE                                           | SEND | INFO                  |
| ---- | ----------- | ----------------------------------------------- | ---- | --------------------- |
| POST | Registro Usuarios | https://restapidisney.herokuapp.com/api/auth/registrar | body | correo, password, nombre |
| POST  | Acceso Usuarios  | https://restapidisney.herokuapp.com/api/auth/acceso   | body | correo, password       |

### Es de aclarar que para todas las peticiones excepto get se debe enviar el token por body

### Busqueda global por argumentos

| CRUD   | RESPONSE                             | ROUTE                                                    | SEND   | INFO                                                              |
| ------ | ------------------------------------ | -------------------------------------------------------- | ------ | ----------------------------------------------------------------- |
| GET    | get pelicula ID                  | https://restapidisney.herokuapp.com/api/buscar/peliculas/id|      query  |Debera enviar el id de la pelicula                                                                   |
| GET    | get character                        | https://restapidisney.herokuapp.com/api/buscar/usuarios/id        | params | Debera enviar el id del personaje                                                                |
| GET    | filter character by age              | https://restapidisney.herokuapp.com      | query  | age                                                               |
| GET    | filter character by name             |             | query  | name                                                              |
| GET    | filter character by width            |              | query  | width                                                             |
| GET    | filter character by width, name, age |              | query  | width, name,age (all possible combinations)                       |
| GET    | filter character by movie            |              | query  | movie (id movie)                                                  |
| POST   | add character                        |             | body   | name, age, width, history, image, movies:[title]                  |
| PUT    | update character                     |             | body   | idCharacter\*, params to change: name, age, width, history, image |
| PUT    | delete character movie               |  | body   | idCharacter*, idMovie*                                            |
| PUT    | add movie to character               |     | body   | idCharacter*, title* (movie)                                      |
| DELETE | delete character                     |            | body   | idCharacter                                                       |

### movies

| CRUD   | RESPONSE                     | ROUTE                                                | SEND   | INFO                                                                          |
| ------ | ---------------------------- | ---------------------------------------------------- | ------ | ----------------------------------------------------------------------------- |
| GET    | get all movies               | https://disney-back.herokuapp.com/movies             |        |                                                                               |
| GET    | get movie                    | https://disney-back.herokuapp.com/movies/:id         | params | id                                                                            |
| GET    | filter movie by title        | https://disney-back.herokuapp.com/movies             | query  | title                                                                         |
| GET    | filter movie by genre        | https://disney-back.herokuapp.com/movies             | query  | genre (id genre)                                                              |
| GET    | order movie by creation date | https://disney-back.herokuapp.com/movies             | query  | order (ASC or DESC)                                                           |
| POST   | add movie                    | https://disney-back.herokuapp.com/movies             | body   | title, image, creationDate, qualification: "1" to "5",genres: [{image, name}] |
| PUT    | update movie                 | https://disney-back.herokuapp.com/movies             | body   | id\*, params to change: title, image, creationDate, qualification: "1" to "5" |
| PUT    | delete genre movie           | https://disney-back.herokuapp.com/movies/genreDelete | body   | idGenre*, idMovie*                                                            |
| PUT    | add genre to movie           | https://disney-back.herokuapp.com/movies/genreAdd    | body   | idMovie*, name* (genre)                                                       |
| DELETE | delete movie                 | https://disney-back.herokuapp.com/movies             | body   | id                                                                            |

### genres

| CRUD   | RESPONSE       | ROUTE                                        | SEND   | INFO                                |
| ------ | -------------- | -------------------------------------------- | ------ | ----------------------------------- |
| GET    | get all genres | https://disney-back.herokuapp.com/genres     |        |                                     |
| GET    | get genre      | https://disney-back.herokuapp.com/genres/:id | params | id                                  |
| POST   | add genre      | https://disney-back.herokuapp.com/genres     | body   | image, name                         |
| PUT    | update genre   | https://disney-back.herokuapp.com/genres     | body   | id\*, params to change: image, name |
| DELETE | delete genre   | https://disney-back.herokuapp.com/genres     | body   | name                                |
