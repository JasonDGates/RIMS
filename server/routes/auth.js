import { Router } from "express";
import passport from "passport";
import "../strategies/localStrategy.js";

const router = Router();

router.post("/auth", passport.authenticate("local"), (req, res) => {});

export default router;
