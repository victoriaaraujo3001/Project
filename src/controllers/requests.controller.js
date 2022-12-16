const requestServices = require("../services/requests.services");

class RequestsControllers {
  async listRequests(req, res, next) {
    try {
      const { id_user } = req.infoToken;
      const allRequests = await requestServices.GetAllRequests(id_user);
      res.status(200).send(allRequests);
    } catch (error) {
      res
        .status(error.status || 500)
        .send({ message: error.message, description: error.description });
    }
  }
  async AddRequests(req, res, next) {
    try {
      const { id_user } = req.infoToken;
      const addRequest = await requestServices.AddRequest(id_user,req.body);
      res.status(201).send({ message: "Pedido adicionado com sucesso" });
    } catch (error) {
      res
        .status(error.status || 500)
        .send({ message: error.message, description: error.description });
    }
  }
  async Finalize(req, res, next) {
    try {
      const { id } = req.params;
      const finalize = await requestServices.FinalizeOrder(id);
      res.status(200).send({ message: "Pedido finalizado com sucesso" });
    } catch (error) {
      res
        .status(error.status || 500)
        .send({ message: error.message, description: error.description });
    }
  }
  async AllFinishedOrders(req, res, next) {
    try {
      const finished = await requestServices.FinishedOrders();
      res.status(200).send(finished);
    } catch (error) {
      res
        .status(error.status || 500)
        .send({ message: error.message, description: error.description });
    }
  }
  async AllPendingOrders(req, res, next) {
    try {
      const pendign = await requestServices.PendingOrders();
      res.status(200).send(pendign);
    } catch (error) {
      res
        .status(error.status || 500)
        .send({ message: error.message, description: error.description });
    }
  }
  async Delete(req, res, next) {
    try {
      const { id } = req.params;
      const deleteOrder = await requestServices.DeleteOrder(id);
      res.status(200).send({ message: "Pedido deletado com sucesso" });
    } catch (error) {
      res
        .status(error.status || 500)
        .send({ message: error.message, description: error.description });
    }
  }
}

module.exports = new RequestsControllers();
