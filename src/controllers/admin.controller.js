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
  async AllRequestsAdmin(req, res, next) {
    try {
      const allRequests = await AdminServices.AllRequests();

      res.status(200).send(allRequests);
    } catch (error) {
      res.status(error.status || 500).send({ message: error.message });
    }
  }
  async OneRequestsAdmin(req, res, next) {
    try {
      const { pedido } = req.params;

      const oneRequests = await AdminServices.OneRequests(pedido);

      res.status(200).send(oneRequests);
    } catch (error) {
      res.status(error.status || 500).send({ message: error.message });
    }
  }
  async AllRequestsAdminByUser(req, res, next) {
    try {
      const { user } = req.params;

      const oneRequestByUser = await AdminServices.OneRequests(user);

      res.status(200).send(oneRequestByUser);
    } catch (error) {
      res.status(error.status || 500).send({ message: error.message });
    }
  }
}

module.exports = new AdminControllers();
