require("dotenv").config();
const port = process.env.PORT || 3000 ;
const app = require("../server/app");
const sequelize = require("../config/configSequelize");

app.listen(
  port,
  console.table({
    Server: "Server is running 🚀",
    Port: port,
    DataBase: sequelize.config.host
  }),
);
