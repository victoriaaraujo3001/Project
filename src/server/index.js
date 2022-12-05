require("dotenv").config();
const port = process.env.PORT || 3333;
const app = require("../server/app");
const sequelize = require("../config/configSequelize");

app.use((req, res, next) => {
  res.header("Acces-Control-Allow-Origin", "*");
  res.header(
    "Acces-Control-Allow-Header",
    "Origin, X-Requrested-With, Content-Type , Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).send({});
  }
  next();
});

app.listen(
  port,
  console.table({
    Server: "Server is running 🚀",
    Port: port,
    DataBase: sequelize.config.host,
  })
);
