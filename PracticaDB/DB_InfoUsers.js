//******************************collections peliculas asociadas*************************

db.peliculas.insertMany([
  {
    imagen: null,
    titulo: "Toy Story",
    fechaDeCreacion: 1995,
    calificacion: 5,
    PersonajesAsociados: [
      "Woody",
      "Sid Phillips",
      "Buzz Lightyear",
      "Lotso Cariñoso",
      "Andy Davis",
      "Mr. Potato Head",
      "Bo Peep",
      "Lenny",
    ],
  },
  {
    imagen: null,
    titulo: "Cars",
    fechaDeCreacion: 2006,
    calificacion: 4.5,
    PersonajesAsociados: [
      "Rayo McQueen",
      "Doc Hudson",
      "Tow Mate",
      "Sally",
      "Mack",
      "Ramon",
      "Flo",
      "Fillmore",
    ],
  },
  {
    imagen: null,
    titulo: "La era de hielo",
    fechaDeCreacion: 2002,
    calificacion: 5,
    PersonajesAsociados: ["Sid", "Scrat", "Manny", "Diego", "Roshan"],
  },
]);

//****************************************Collections Genero****************************************//

db.genero.insertMany([
  {
    nombre: "Infantil",
    imagen: null,
    peliculaAsociada: null,
  },
]);

//****************************************Collections Personajes****************************************//

db.personajes.insertMany([
  {
    imagen: null,
    nombre: "Woody",
    historia:
      "El Sheriff Woody Pride, también conocido como Woody, es un juguete que aparece en las películas de Toy Story de Pixar. Se encarga de vigilar el trabajo de administración en una Sociedad de Responsabilidad Limitada. Sus rasgos faciales están basados en Tone Thyne, un ex animador de Disney, El personaje es interpretado por Tom Hanks en su versión original en inglés, doblado por Óscar Barberán en España, y por Carlos Segundo (Toy Story y Toy Story 2) y Arturo Mercado Jr. (Toy Story 3 y Toy Story 4) en Latinoamérica. La voz original para los videojuegos y miniseries de la saga es de Jim Hank woody también aparece en la película Ralph Breaks the Internet, como un cameo. ",
    PeliculaOSerie: null,
  },

  {
    imagen: null,
    nombre: "Buzz Lightyear",
    historia:
      "En las películas Buzz es un juguete con forma de guerrero espacial, el cual llega hasta las manos de Andy, un niño con una gran colección de juguetes. En casa de Andy conocerá al resto de juguetes como son Woody, el Sr. Patata o Rex, entre otros. En las películas, los juguetes Buzz Lightyear cuentan con su propia serie de dibujos, en la cual Buzz vela por la seguridad del universo. Su enemigo es el Emperador Zurg. Al principio el creía que era el verdadero Buzz Lightyear, pero gracias a su mejor amigo Woody, sacó este pensamiento erróneo y adoptó el pensamiento de un juguete. Está enamorado de Jessie. ",
    PeliculaOSerie: null,
  },

  {
    imagen: null,
    nombre: "Rayo McQueen",
    historia:
      "Rayo McQueen (Lightning McQueen en inglés) es el protagonista de la película animada de Disney/Pixar del 2006 Cars y su secuela Cars 3, y co-protagonista de la secuela anterior Cars 2. McQueen es un corredor de circuito de carreras. ",
    PeliculaOSerie: null,
  },

  {
    imagen: null,
    nombre: "Tow Mate",
    historia:
      "Tow Mate es un camión grúa oxidadado de las películas Cars, Cars 2 y Cars 3. Es el mejor amigo de Rayo McQueen. ",
    PeliculaOSerie: null,
  },

  {
    imagen: null,
    nombre: "Manny",
    historia:
      " Manny es uno de los personajes principales de la franquicia de La Era de Hielo y uno de los primeros miembros de la manada que Sid formó, Manny es un gran mamut lanudo y algo malhumorado; pero demustra tener un gran corazón cuando se trata de su familia y amigos. El primer personaje que conoció fue Sid, más tarde a Diego, además de otros personajes. ",
    PeliculaOSerie: null,
  },
  {
    imagen: null,
    nombre: "Diego",
    historia:
      "Diego es un tigre dientes de sable (comúnmente conocido como tigre dientes de sable, las características más distintivas son sus largos dientes caninos , mechones de pelo en las patillas y una cola corta. Él también tiene una línea recta peculiar de pelo en la espalda que es más oscuro que el resto de su piel. Su voz en inglés es Denis Leary, en español Sergio Sendel en la primera película de la Era de hielo y Sebastián Llapur a partir de la era de hielo 2. ",
    PeliculaOSerie: null,
  },
]);
