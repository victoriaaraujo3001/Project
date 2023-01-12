const md5 = require("md5");
const admin = require("../schemas/admin");
const requests = require("../schemas/requests");
const tokenServices = require("./token.services");

class AdminServices {
  async RegisterAdmin({ login, email, password, nome, tel }) {
    const encryptedPassword = md5(password);

    const adminRegister = await admin.create({
      login: login,
      email: email,
      password: encryptedPassword,
      nome: nome,
      telefone: tel,
      status: "1",
    });
    return {
      nome: adminRegister.nome,
      login: adminRegister.login,
      email: adminRegister.email,
    };
  }
  async FindByUser({ login, password }) {
    const encryptedPassword = md5(password);

    const findAdmin = await admin.findOne({
      where: { login: login, password: encryptedPassword},
    });

    if (findAdmin.dataValues.status !== 1) {
      throw new Error("")
    } 
    const tokenAdmin = await tokenServices.generateToken({
      id: findAdmin.id,
      login: findAdmin.login,
    });

    return { user: { id: findAdmin.id, login: findAdmin.login }, tokenAdmin };
  }
  async AllRequests(){
    const all = await requests.findAll();
    return all;
  }
  async OneRequests(pedido){
    const one = await requests.findOne({ id_pedido: pedido});
    return one;
  }
  async AllRequestsByUser(id){
    const one = await requests.findAll({ id_user: id});
    return one;
  }
}

module.exports = new AdminServices();
