user1 = {
  name: "Alfonso",
  age: 17,
  phonenumber: 3324112,
  email: "alfonso@user1.com",
  city: "Barcelona",
};
user2 = {
  name: "Ana",
  age: 22,
  phonenumber: 8217222,
  email: "Ana@user2.com",
  city: "Madrid",
};
user3 = {
  name: "Gabriel",
  age: 37,
  phonenumber: 4568762,
  email: "Gabriel@user3.com",
  city: "Santiago de Chile",
};
user4 = {
  name: "Carla",
  age: 42,
  phonenumber: 9087612,
  email: "user4@Carla.com",
  city: "Bogota",
};
user5 = {
  name: "Frank",
  age: 37,
  phonenumber: 7172678,
  email: "user5@Frank.com",
  city: "Medellin",
};
user6 = {
  name: "Fabio",
  age: 60,
  phonenumber: 7621429,
  email: "Fabio@user6.com",
  city: "Sao Paulo",
};

//Insertar

db.users.insertOne(
  (user1 = {
    name: "Alfonso",
    age: 17,
    phonenumber: 3324112,
    email: "alfonso@user1.com",
    city: "Barcelona",
  })
);

db.users.insertMany([
  (user2 = {
    name: "Ana",
    age: 22,
    phonenumber: 8217222,
    email: "Ana@user2.com",
    city: "Madrid",
  }),
  (user3 = {
    name: "Gabriel",
    age: 37,
    phonenumber: 4568762,
    email: "Gabriel@user3.com",
    city: "Santiago de Chile",
  }),
  (user4 = {
    name: "Carla",
    age: 42,
    phonenumber: 9087612,
    email: "user4@Carla.com",
    city: "Bogota",
  }),
  (user5 = {
    name: "Frank",
    age: 37,
    phonenumber: 7172678,
    email: "user5@Frank.com",
    city: "Medellin",
  }),
  (user6 = {
    name: "Fabio",
    age: 60,
    phonenumber: 7621429,
    email: "Fabio@user6.com",
    city: "Sao Paulo",
  }),
]);

// Obtener

db.users.findOne({
  city: "Medellin",
});

db.users.findOne({
  age: { $gt: 40 },
});

db.users.findOne({
  email: /^user5/,
});

db.users
  .find({
    $and: [{ age: { $gt: 25 } }, { email: /.com$/ }],
  })
  .pretty();

//Actualizar o Agregar