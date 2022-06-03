const { response } = require("express");
const {Usuario,Personaje,Pelicula, Genero}=require("../models/index")

const actualizarImagen = (req, res = response) => {
  const { id, coleccion } = req.params;
  let modelo;
  switch (coleccion) {
    case "usuarios":
modelo=await Usuario.findById(id)
if (!modelo) {
  return res.status(400).json({msg:`No existe un usuario con el id ${id}`})
}
 break;
    
    case "personajes":

modelo=await Personaje.findById(id)
if (!modelo) {
  return res.status(400).json({msg:`No existe un personaje con el id ${id}`})
}
      break;

    case "peliculas":

modelo=await Pelicula.findById(id)
if (!modelo) {
  return res.status(400).json({msg:`No existe una pelicula con el id ${id}`})
}

      break;
    case "generos":

modelo=await Genero.findById(id)

if (!modelo) {
  return res.status(400).json({msg:`No existe un genero con el id ${id}`})
}

      break;

    default:
      break;
  }
};

module.exports=actualizarImagen