const requestServices = require("../services/requests.services");

class RequestsControllers {
  async listRequests(req, res, next) {
    try {
      const allRequests = await requestServices.GetAllRequests();
      res.status(200).send(allRequests);
    } catch (error) {
      res
        .status(error.status || 500)
        .send({ message: error.message, description: error.description });
    }
  }
  async AddRequests(req, res, next) {
    try {
      const addRequest = await requestServices.AddRequest(req.body);
      console.log(addRequest)
      res.status(201).send({message: "Pedido adicionado com sucesso"});
    } catch (error) {
      res
        .status(error.status || 500)
        .send({ message: error.message, description: error.description });
    }
  }
}

module.exports = new RequestsControllers();
