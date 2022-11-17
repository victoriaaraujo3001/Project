const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const router = require("../routes/index.routes");

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(morgan("dev"));
    this.server.use(cors());
  }

  routes() {
    router(this.server);
  }
}

module.exports = new App().server;
