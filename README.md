# Mundo de Disney BackEnd

Las tecnologias utilizadas son: NodeJs, Express, Mongoose, Nodemailer, Cloudinary.

Esta API esta diseñada para:

- Personaje: Agregar, editar, eliminar, ver detalles de un personaje en especifico, filtrar por: nombre, id, ver listado de todos los personajes.

- Pelicula o serie: Agregar, editar, eliminar, ver detalles de una pelicula o serie y titulo de la pelicula, ordenar de forma ascendente o descendiente

- Genero: Agregar, editar, eliminar, ver detalles de un genero.

La base de esta api es: https://restapidisney.herokuapp.com y puedes usarla con los siguientes endpoints:

### usuarios

| CRUD | RESPONSE            | ROUTE                                                  | SEND | INFO                           |
| ---- | ------------------- | ------------------------------------------------------ | ---- | ------------------------------ |
| POST | Registrar usuarios  | https://restapidisney.herokuapp.com/api/auth/registrar | body | correo, password, nombre       |
| POST | Acceso Usuarios     | https://restapidisney.herokuapp.com/api/auth/acceso    | body | correo, password               |
| POST | Actualizar Usuarios | https://restapidisney.herokuapp.com/api/auth/id        | body | correo, password ,token,nombre |

(El token de acceso se muestra en el body al momento de acceder con el usuario previamente registrado)
(Debera Ingresar el Token por el header con el nombre key-token)

### Es de aclarar que para todas las peticiones se debe enviar el token por body menos las Get

### Busqueda Global por parametros

| CRUD | RESPONSE                               | ROUTE                                                                              | SEND   | INFO       |
| ---- | -------------------------------------- | ---------------------------------------------------------------------------------- | ------ | ---------- |
| GET  | Filtrar peliculas por su id            | https://restapidisney.herokuapp.com/api/buscar/peliculas/62a4e1d8a0faf74f45e29389  |        |            |
| GET  | Filtrar peliculas por nombre           | https://restapidisney.herokuapp.com/api/buscar/peliculas/ cars                     | params | nombre     |
| GET  | Filtrar peliculas por orden asc o desc | https://restapidisney.herokuapp.com/api/buscar/peliculas/ desc                     | query  | asc o desc |
| GET  | Filtrar personajes por id              | https://restapidisney.herokuapp.com/api/buscar/personajes/62745d4ab3d7862f468ba327 | query  | id         |
| GET  | Filtrar personaje por nombre           | https://restapidisney.herokuapp.com/api/buscar/personajes/ tom                     | query  | nombre     |

### Peliculas

| CRUD   | RESPONSE                    | ROUTE                                                     | SEND   | INFO
| ------ | --------------------------- | ----------------------------------------------------------| ------ |-----
| GET    | Obtener todas las peliculas | https://restapidisney.herokuapp.com/api/peliculas         |        |
| GET    | Detalles de las peliculas   | https://restapidisney.herokuapp.com/api/detallesPeliculas |        |
| POST   | Crear Pelicula              | https://restapidisney.herokuapp.com/api/peliculas         | body   | titulo, , calificacion: "1" a "5",genero: id del genero,fechadecreacion, (key-token por header)
| PUT    | Actualizar Peliculas        | https://restapidisney.herokuapp.com/api/peliculas/id      | params | id de la pelicula params
| Delete | Borrar pelicula             | https://restapidisney.herokuapp.com/api/peliculas/id      | params | id (token de usuario administrador)                                                             |     |

### Personajes

(Para crear actualizar y eliminar pasar por header el key-token)

| CRUD   | RESPONSE                     | ROUTE                                                 | SEND | INFO                              |
| ------ | ---------------------------- | ----------------------------------------------------- | ---- | --------------------------------- | 
| GET    | Obtener todos los personajes | https://restapidisney.herokuapp.com/api/personajes    |      |
| POST   | Crear personajes             | https://restapidisney.herokuapp.com/api/personajes    | body | nombre,historia,peliculaoserie:id |
| PUT    | Actualizar Personaje         | https://restapidisney.herokuapp.com/api/personajes/id | body | id por params para actualizar     | nombre, historia |
| DELETE | Borrar personaje             | https://restapidisney.herokuapp.com/api/personajes/id | body | id\*, params para borrar          |

### Generos

| CRUD   | RESPONSE                  | ROUTE                                              | SEND   | INFO                   |
| ------ | ------------------------- | -------------------------------------------------- | ------ | ---------------------- |
| GET    | Obtener todos los generos | https://restapidisney.herokuapp.com/api/generos    |        |                        |
| POST   | Crear genero              | https://restapidisney.herokuapp.com/api/generos    | body   | nombre                 |
| PUT    | Actualizar genero         | https://restapidisney.herokuapp.com/api/generos/id | body   | id por params , nombre |
| DELETE | delete genre              | https://restapidisney.herokuapp.com/api/generos/id | params | id                     |

### Actualizar cargar Imagenes

# para cada uno debera ingresar la imagen por form-data - key = archivo

| CRUD | RESPONSE                 | ROUTE                                                        | SEND   | INFO     |
| ---- | ------------------------ | ------------------------------------------------------------ | ------ | -------- |
| PUT  | Agregar Imagen Usuario   | https://restapidisney.herokuapp.com/api/cargas/usuarios/id   | params |          | 
| PUT  | Agregar Imagen Pelicula  | https://restapidisney.herokuapp.com /api/cargas/peliculas/id | params | id       |
| PUT  | Agregar Imagen Personaje | https://restapidisney.herokuapp.com/api/cargas/personajes/id | params | id, name |
| PUT  | Agregar Imagen Genero    | https://restapidisney.herokuapp.com/api/cargar/generos       | params | id       |
