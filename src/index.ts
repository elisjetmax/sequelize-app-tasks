import express, { Request, Response } from "express";
import UserRoutes from "./Routes/User.routes";
const config = require("./config");

console.log("config.NODE :>> ", config.DB_HOST);
const app = express();

const PORT = config.APP_PORT || 3001;
console.log("PORT :>> ", PORT);

app.get("/", (req: Request, res: Response) => {
  res.send("This is my API!");
});

app.use("/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
