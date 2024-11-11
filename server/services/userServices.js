import { pool } from '../config/dbConnection.js';

export const findUserByEmail = async (email) => {
    const result = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );
    return result.rows[0];
};

export const findUserById = async (id) => {
 
};

export const findUsersByRole = async (role) => {
  
};
