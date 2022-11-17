const generosService = require("../services/generos.service");

class GenerosControllers {
  async listGeneros(req, res, next) {
    try {
      const allGeneros = await generosService.GetAllGeneros();
      res.status(200).send(allGeneros);
    } catch (error) {
      res
        .status(error.status || 500)
        .send({ message: error.message, description: error.description });
    }
  }
}

module.exports = new GenerosControllers();
