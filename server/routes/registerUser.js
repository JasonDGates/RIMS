import { Router } from "express";
import UsersModel from "../model/Users.js";
import validateRegisterUser from "../middleware/validateRegisterUser.js";
const router = Router();

router.post("/registerUser", validateRegisterUser, async (req, res) => {
  console.log("registerUser");
  const user = await UsersModel.createUser(req.body);
  res.send(user);
});

export default router;
