import { Sequelize } from "sequelize";
const config = require("../config");

export const sequelize = new Sequelize(
  config.DB_NAME || "",
  config.DB_USER || "",
  config.DB_PASSWORD,
  {
    host: config.DB_HOST,
    dialect: "mysql",
  }
);
