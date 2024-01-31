import { Router } from 'express';

const router = Router();

router.get('/products', (req, res) => {
    console.log('products route');
});

export default router;