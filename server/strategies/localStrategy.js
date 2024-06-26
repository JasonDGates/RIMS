import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { findUserByEmail, findUserById } from "../services/userServices.js";

passport.use(
  // This validates that the user actually exists and that the password is correct
  new LocalStrategy(
    { usernameField: "emailAddress" },
    async (emailAddress, password, done) => {
      console.log("Email Address: ", emailAddress, "Password: ", password);
      try {
        const user = await findUserByEmail(emailAddress);
        if (!user) {
          return done(null, false, { message: "Incorrect Email." });
        }

        const isValidPassword = () => {
          if (user.password === password) return true;
          return false;
        };

        if (!isValidPassword()) {
          return done(null, false, { message: "Incorrect Password." });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Serialize user into the sessions
passport.serializeUser((user, done) => {
  console.log("Serialized");
  console.log(user.id);
  done(null, user._id);
});

// Deserialize user from the sessions
passport.deserializeUser(async (id, done) => {
  console.log("De-Serialized");
  try {
    const user = await findUserById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;
