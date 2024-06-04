import passport from "passport";
import { Strategy } from "passport-local";
import { findUserByEmail } from "../services/userServices";

passport.use(
  // This validates that the user actually exists and that the password is correct
  new Strategy(
    { usernameField: "emailAddress" },
    async (emailAddress, password, done) => {
      try {
        const user = await findUserByEmail(emailAddress);

        if (!user) {
          return done(null, false, { message: "Incorrect Email." });
        }

        const isValidPassword = await user.isValidPassword(password);
        if (!isValidPassword) {
          return done(null, false, { message: "Incorrect Password." });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);
