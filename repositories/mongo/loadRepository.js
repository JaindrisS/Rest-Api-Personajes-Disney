const Pelicula = require("../../models/pelicula");
const Genero = require("../../models/genero");
const Personaje = require("../../models/personaje");
const Usuario = require("../../models/usuario");

const updateImage = async (id, coleccion, cloudinary, files) => {
  let modelo;
  switch (coleccion) {
    case "usuarios":
      modelo = await Usuario.findById(id);
      if (!modelo) {
        return {
          status: 400,
          msg: `No existe un usuario con el id ${id}`,
        };
      }
      break;

    case "personajes":
      modelo = await Personaje.findById(id);
      if (!modelo) {
        return {
          status: 400,
          msg: `No existe un personaje con el id ${id}`,
        };
      }
      break;

    case "peliculas":
      modelo = await Pelicula.findById(id);
      if (!modelo) {
        return {
          status: 400,
          msg: `No existe una pelicula con el id ${id}`,
        };
      }

      break;
    case "generos":
      modelo = await Genero.findById(id);

      if (!modelo) {
        return {
          status: 400,
          msg: `No existe un genero con el id ${id}`,
        };
      }

      break;

    default:
      return {
        status: 500,
        msg: "Se me olvido validar esto",
      };
  }
  // Borrar imagenes previoas en cloudinary
  if (modelo.img) {
    let nombreArray = modelo.img.split("/");
    let nombre = nombreArray[nombreArray.length - 1];
    let [public_id] = nombre.split(".");
    cloudinary.uploader.destroy(public_id);
  }

  // Guardar nueva imagen en cloudinary
  const { tempFilePath } = files.archivo;
  const { secure_url } = await cloudinary.uploader.upload(tempFilePath);
  modelo.img = secure_url;
  await modelo.save();

  return modelo;
};

module.exports = updateImage;
