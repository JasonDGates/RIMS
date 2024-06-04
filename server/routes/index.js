import { Router } from "express";
import usersRouter from "./users.js";
import productsRouter from "./products.js";
import registerUser from "./registerUser.js";
import auth from "./auth.js";
import userStatus from "./userStatus.js";

const router = Router();

router.use(usersRouter);
router.use(productsRouter);
router.use(registerUser);
router.use(auth);
router.use(userStatus);

export default router;
