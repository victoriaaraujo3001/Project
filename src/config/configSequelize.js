require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: "mysql",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);
async function VerifiyDB() {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected 🟢");
  } catch (error) {
    console.log("Connection error 🔴", error);
  }
}

(module.exports = sequelize), VerifiyDB;
