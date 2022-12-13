const UserServices = require("../services/user.services");

class UserControllers {
  async InsertUser(req, res, next) {
    try {
      const user = await UserServices.InsertUserService(req.body);

      res.status(201).send({ message: "Usuario criado com sucesso" });
      return user;
    } catch (error) {
      res.status(500 || error.status).send({ message: error.message });
    }
  }

  async FindUser(req, res, next) {
    try {
      const findUser = await UserServices.FindByUser(req.body);

      res.status(200).send(findUser);
    } catch (error) {
      res
        .status(error.status || 404)
        .send({ message: "Usuário não encontrado/inválido" });
      console.log(error.message);
    }
  }
}

module.exports = new UserControllers();
