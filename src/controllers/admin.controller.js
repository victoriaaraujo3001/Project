const AdminServices = require("../services/admin.services");

class AdminControllers {
  async Register(req, res, next) {
    try {
      const admin = await AdminServices.RegisterAdmin(req.body);

      res.status(201).send({ message: "Usuario criado com sucesso", admin });
    } catch (error) {
      res.status(500 || error.status).send({ message: error.message });
    }
  }

  async FindUser(req, res, next) {
    try {
      const findUser = await AdminServices.FindByUser(req.body);

      res.status(200).send(findUser);
    } catch (error) {
      res
        .status(error.status || 404)
        .send({ message: "Usuário não encontrado/inválido" });
    }
  }
}

module.exports = new AdminControllers();
