import * as dotenv from "dotenv";
dotenv.config();
module.exports = {
  NODE_ENV: process.env.NODE_ENV || "development",
  APP_PORT: process.env.APP_PORT || 3001,
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_NAME: process.env.DB_NAME || "test",
  DB_USER: process.env.DB_USER || "root",
  DB_PASSWORD: process.env.DB_PASSWORD || "root",
  DB_PORT: process.env.DB_PORT || 3306,
  DB_DIALECT: process.env.DB_DIALECT || "mysql",
};
