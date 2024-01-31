import { Router } from 'express';

const router = Router();

router.get('/users', (req, res) => {
  console.log('users route');
});

export default router;
