const {
  getCharacter,
} = require("../../../repositories/mongo/searchRepository");
const { response } = require("../searchModules");

const buscarPersonaje = async (termino = "", res = response) => {
  const response = await getCharacter(termino);
  console.log(response.status);
  return res.status(response.status).json(response.msg);
};

module.exports = buscarPersonaje;
