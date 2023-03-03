import { Request, Response, Router } from "express";
import UserController from "../Controllers/Users.controller";

const UserRoutes = Router();

UserRoutes.get("/list", async (req, res) => {
  try {
    const users = await new UserController().getAllUsers();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

UserRoutes.post("/create", async (req: Request, res: Response) => {
  try {
    console.log("req.body :>> ", req.body);
    const user = await new UserController().createUser(req.body);
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

export default UserRoutes;
