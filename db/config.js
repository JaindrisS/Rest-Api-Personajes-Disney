const mongoose = require("mongoose");

const dbConeccion = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN),
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
      };
    console.log("Base de datos en lineas");
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la base de datos");
  }
};

module.exports = { dbConeccion };
