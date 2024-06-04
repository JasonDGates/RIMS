import Users from "../model/Users.js";

export const findUserByEmail = async (email) => {
  try {
    const user = await Users.findOne({ emailAddress: email });
    return user;
  } catch (error) {
    console.error("Error finding user by email:", error);
    throw error;
  }
};

export const findUserById = async (id) => {
  try {
    const user = await Users.findById(id);
    return user;
  } catch (error) {
    console.error("Error finding user by ID:", error);
    throw error;
  }
};

export const findUsersByRole = async (role) => {
  try {
    const users = await Users.find({ role: role });
    return users;
  } catch (error) {
    console.error("Error finding users by role:", error);
    throw error;
  }
};
