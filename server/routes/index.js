import { Router } from "express";
import usersRouter from "./users.js";
import productsRouter from "./products.js";
import registerUser from "./registerUser.js";
import authenticateUser from "./authenticateUser.js";
import userStatus from "./userStatus.js";

const router = Router();

router.use(usersRouter);
router.use(productsRouter);
router.use(registerUser);
router.use(authenticateUser);
router.use(userStatus);

// getUser()
// authenticateUser()
// getProduct()
// addProduct()
// registerUser()
// getUserInventory()

export default router;
