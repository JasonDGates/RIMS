import { pool } from "../config/dbConnection.js";

const UsersModel = {
  async getUserByEmailAddress(req, res) {
    try {
      
    } catch (error) {
      console.log(error)
    }
  },

  async createUser(name, email) {
    const { rows } = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    return rows[0];
  },
}

export default UsersModel;