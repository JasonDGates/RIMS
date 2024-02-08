import { Router } from 'express';
import usersRouter from './users.js';
import productsRouter from './products.js';
import registerUser from './registerUser.js';

const router = Router();

router.use(usersRouter);
router.use(productsRouter);
router.use(registerUser);

export default router;
