import { Router } from "express";
import Users from "../model/Users.js";
import { hashPassword } from "../utils/helpers.js";

const router = Router();

router.post("/registerUser", async (req, res) => {
  console.log(req.body);
  try {
    // Extract user data from request body
    const { firstName, lastName, role, emailAddress, password } = req.body;

    // Create a new user instance
    const newUser = new Users({
      firstName,
      lastName,
      role,
      emailAddress,
      password: hashPassword(password),
    });

    // Save the new user to the database
    const savedUser = await newUser.save();

    // Respond with the saved user
    res.status(201).json(savedUser);
  } catch (error) {
    console.log(error);
  }
});

export default router;
