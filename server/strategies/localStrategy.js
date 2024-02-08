import passport from 'passport';
import { Strategy } from 'passport-local';

passport.use(
  // This validates that the user actually exists and that the password is correct
  new Strategy((username, password, done) => {
    const findUser =
  }),
);
