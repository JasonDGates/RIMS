import { Router } from "express";
import passport from "passport";
import "../strategies/localStrategy.js";

const router = Router();

router.post("/auth", passport.authenticate("local"), (req, res) => {
  res.sendStatus(200);
});

router.post("/auth/logout", (req, res) => {
  if (!req.user) return res.sendStatus(401);
  req.logout((error) => {
    if (error) return res.sendStatus(400);
    res.sendStatus(200);
  });
});

export default router;
