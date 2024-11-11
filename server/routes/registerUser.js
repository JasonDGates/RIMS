import { Router } from "express";

const router = Router();

router.post("/registerUser", async (req, res) => {
  console.log(req.body);
});

export default router;
