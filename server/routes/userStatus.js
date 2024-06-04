import { Router } from "express";

const router = Router();

router.get("/status", (req, res) => {
  console.log("Inside Auth API: ", req.user);
  return req.user ? res.send(req.user) : res.sendStatus(401);
});

export default router;
