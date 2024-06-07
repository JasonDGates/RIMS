import bcrypt from "bcrypt";

export const hashPassword = (password) => {
  const saltRounds = 10;
  const salt = bcrypt.genSalt(saltRounds);
  return bcrypt.hash(password, salt);
};
