(usuario7 = {
  nombre: "usuario7",
  edad: 43,
  correo: "usuario7@usuario7.com",
}),
  (usuario8 = {
    nombre: "usuario8",
    edad: 25,
    correo: "usuario8@usuario8.com",
  }),
  db.usuarios.insertMany([
    (usuario9 = {
      nombre: "usuario9",
      edad: 28,
      correo: "usuario9@usuario9.com",
      status: "activo",
    }),
    (usuario10 = {
      nombre: "usuario10",
      edad: 53,
      correo: "usuario10@usuario10.com",
      status: "activo",
    }),
    (usuario11 = {
      nombre: "usuario11",
      edad: 63,
      correo: "usuario11@usuario11.com",
      status: "activo",
    }),
    (usuario12 = {
      nombre: "usuario12",
      edad: 13,
      correo: "usuario12@usuario12.com",
      status: "activo",
    }),
  ]);

db.usuarios.deleteMany([
  (usuario7 = {
    nombre: "usuario7",
    edad: "43",
    correo: "usuario7@usuario7.com",
  }),
  (usuario8 = {
    nombre: "usuario8",
    edad: "53",
    correo: "usuario8@usuario8.com",
  }),
  (usuario7 = {
    nombre: "usuario7",
    edad: "43",
    correo: "usuario7@usuario7.com",
  }),
  (usuario8 = {
    nombre: "usuario8",
    edad: "53",
    correo: "usuario8@usuario8.com",
  }),
  (usuario9 = {
    nombre: "usuario9",
    edad: "43",
    correo: "usuario9@usuario9.com",
    status: "activo",
  }),
  (usuario10 = {
    nombre: "usuario10",
    edad: "53",
    correo: "usuario10@usuario10.com",
    status: "activo",
  }),
  (usuario11 = {
    nombre: "usuario11",
    edad: "43",
    correo: "usuario11@usuario11.com",
    status: "activo",
  }),
  (usuario12 = {
    nombre: "usuario12",
    edad: "53",
    correo: "usuario12@usuario12.com",
    status: "activo",
  }),
]);

db.usuarios.insertMany([
  {
    nombre: "usuario20",
    edad: 20,
    status: "negativo",
  },
  {
    nombre: "usuario30",
    edad: 30,
    status: "negativo",
  },
  {
    nombre: "usuario40",
    edad: 40,
    status: "negativo",
  },
  {
    nombre: "usuario50",
    edad: 50,
    status: "activo",
  },
  {
    nombre: "usuario15",
    edad: 15,
    status: "negativo",
  },
]);

//Obtener todos los usuarios conuna edad mayor a 10 y un estatus activo

db.usuarios.findOne({
  edad: { $gt: "10" },
});
db.usuarios.find({
  $and: [{ edad: { $gt: 10 } }, { status: "activo" }],
});
db.coleccion.find({ $and: [{ filtro1 }, { filtro2 }, ...{ filtroN }] });

//Obtener los usuarios cuya edad no sean igual a

db.usuarios.find({
  edad: { $ne: 53 },
});

db.usuarios.find({
  $and: [
    {
      edad: {
        $ne: 43,
      },
    },

    {
      edad: {
        $ne: 50,
      },
    },
  ],
});
//Obtener todos los usuarios que tengan por edad 20 30 40

db.usuarios.find({
  $or: [
    {
      edad: 20,
    },
    {
      edad: 30,
    },
    {
      edad: 40,
    },
  ],
});

db.usuarios.find({
  edad: { $in: [20, 50, 66, 53] },
});

// Obtener todos los usuarios con el atributo status
db.usuarios.find({
  status: { $exists: true },
});

// Obtener todos los usuarios con status activo

db.usuarios.find({ status: "activo" });

// Obtener todos los atributos con status activo y correo electronico

db.usuarios.find({
  $and: [
    {
      status: { $exists: true },
    },
    {
      status: "activo",
    },

    {
      correo: { $exists: true },
    },
  ],
});

// ontener usuario con mayor edad

db.usuarios
  .find()
  .sort({
    edad: 1,
  })
  .limit(1);

// obtener por expresiones regulares
db.usuarios.find({
  correo: /.com$/,
});

// db.usuarios.find({},{
//   {correo:true,
//   nombre:true}
// })

db.usuarios.find(
  {
    edad: { $gt: 35 },
  },
  { nombre: true }
);

// db.usuarios.find({"usuario20"},{status:true})

db.usuarios.updateMany(
  { status: "activo" },
  { $set: { direccion: "Desconocida" } }
);

db.usuarios.update(
  { status: "inactivo" },

  { $set: { status: "activo" } },
  { multi: true }
);

db.usuarios.updateMany(
  { correo: { $exists: true } },
  { $set: { telefono: "undefined" } }
);

db.usuarios.updateMany(
  {
    edad: { $exists: true },
  },
  {
    $inc: { edad: 1 },
  }
);

db.usuarios.updateMany(
  { edad: { $exists: true } },
  {
    $inc: { edad: -5 },
  }
);

db.usuarios.updateMany({ edad: { $gt: 30 } }, { $inc: { edad: -14 } });

db.usuarios.updateMany({ edad: { $gt: 30 } }, { $set: { status: "inactivo" } });

db.usuarios.remove({
  status: "inactivo",
});
db.users.insertOne(
  (usuario15 = {
    nombre: "usuario15",

    correo: "Sincere@april.com",
    direccion: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
  })
);

usuario15 = {
  nombre: "usuario15",

  correo: "Sincere@april.com",
  direccion: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
};
db.users.find({
  "direccion.geo.lat": "-37.3159",
});

//obtener propiedades exactas de un documento
db.users.find(
  {
    "direccion.geo.lng": "81.1496",
  },
  {
    "direccion.suite": true,
    correo: true,
  }
);

usuario99 = {
  nombre: "usuario99",
  username: "Moriah.Stanton",
  email: "Rey.Padberg@karina.biz",
  address: {
    street: "Kattie Turnpike",
    suite: "Suite 198",
    city: "Lebsackbury",
    zipcode: "31428-2261",
    geo: {
      lat: "-38.2386",
      lng: "57.2232",
    },
  },
  phone: "024-648-3804",
  website: "ambrose.net",
  company: {
    name: "Hoeger LLC",
    catchPhrase: "Centralized empowering task-force",
    bs: "target end-to-end models",
  },
};

db.users.find(
  {
    nombre: "usuario99",
  },
  {
    "address.geo.lat": true,
    "company.name": true,
  }
);

db.users.find(
  {
    nombre: "usuario99",
  },
  {
    "company.name": true,
    website: true,
  }
);

usuario200 = {
  name: "usuario200",
  username: "Maxime_Nienow",
  email: "Sherwood@rosamond.me",
  deporte: ["futbol", "beisbol", "tenis"],
  abount: {
    course: [
      {
        name: "Curso Javascript",
      },
      {
        name: "Curso MongoDB",
      },

      {
        name: "express.js",
      },
    ],
  },
  address: {
    street: "Ellsworth Summit",
    suite: "Suite 729",
    city: "Aliyaview",
    zipcode: "45169",
    geo: {
      lat: "-14.3990",
      lng: "-120.7677",
    },
  },
  phone: "586.493.6943 x140",
  website: "jacynthe.com",
  company: {
    name: "Abernathy Group",
    catchPhrase: "Implemented secondary concept",
    bs: "e-enable extensible e-tailers",
  },
};

db.users.updateMany(
  {
    name: "usuario200",
  },
  {
    $set: {
      "address.city": "Canada",
    },
  }
);

b.usuarios.updateMany(
  { correo: { $exists: true } },
  { $set: { telefono: "undefined" } }
);
db.users.updateMany(
  {
    "address.city": { $exists: false },
  },
  {
    $set: {
      "address.city": "Barcelona",
    },
  }
);
// Actualiza
db.peliculas.updateMany(
  {
    titulo: { $exists: true },
  },
  {
    $set: {
      estado: true,
    },
  }
);

db.users.updateMany(
  {
    id: { $gt: 5 },
  },

  {
    $set: {
      "company.rango": "Empleado Nivel 2",
    },
  }
);

db.users.updateMany(
  {
    estado: { $exists: false },
  },

  {
    $set: {
      estado: "inactivo",
    },
  }
);

db.users.update(
  {
    id: 1,
  },

  {
    $set: {
      "company.rango": "Nuevo Empleado",
    },
  }
);

db.users.update(
  {
    id: 1,
  },
  {
    $set: {
      cursos: [
        {
          Frontend: ["Html", "Css", "Javascript", "Reac.js"],
        },
        {
          BaseDatos: "MongoDB",
        },
        {
          BackEnd: "Express.js",
        },
      ],
    },
  }
);

// Obtener Informacion dentro de un array

db.users.findOne({
  cursos: {
    $elemMatch: {
      BaseDatos: "MongoDB",
    },
  },
});

db.users.findOne(
  {
    cursos: {
      $elemMatch: {
        BaseDatos: "MongoDB",
      },
    },
  },
  {
    cursos: true,
  }
);

db.users.findOne(
  { id: 1 },
  {
    cursos: {
      $elemMatch: {
        Frontend: ["Html", "Css", "Javascript", "Reac.js"],
      },
    },
  }
);

db.users.updateOne(
  {
    id: 1,
  },
  {
    $push: {
      cursos: {
        Comentario: "Me gusta Aprender Aqui",
      },
    },
  }
);

db.users.updateOne(
  {
    id: 1,
  },
  {
    $push: {
      cursos: {
        herramientas: ["Git", "Postman", "Linux"],
      },
    },
  }
);

db.users.updateOne(
  {
    id: 1,
  },
  {
    $push: {
      cursos: {
        Idiomas: ["Ingles B1", "Frances Basico"],
      },
    },
  }
);

db.users.updateOne(
  {
    id: 1,
  },
  {
    $push: {
      "cursos.0.Frontend": "Angula.js",
    },
  }
);

db.users.updateOne(
  {
    id: 1,
  },
  {
    $push: {
      "cursos.0.Frontend": "Vue.Js",
    },
  }
);

db.users.updateOne(
  {
    id: 1,
  },
  {
    $push: {
      "cursos.5.herramientas": "GitHub",
    },
  }
);

// actualizar

db.users.updateOne(
  {
    id: 1,
  },
  {
    $set: {
      "cursos.3.comentario": "Mi primer curso de mongoDB",
    },
  }
);
