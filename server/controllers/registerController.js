import userJSON from '../model/users.json';

const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require('bcrypt');

const usersDB = {
  users: userJSON,
  setUsers(data) { this.users = data; },
};

const handleNewUser = async (req, res) => {
  const { user, password } = req.body;
  if (!user || !password) return res.status(400).json({ message: 'either username or password are missing' });
  // check for duplicte usernames in db
  const duplicateUser = usersDB.users.find((person) => person.username === user);
  if (duplicateUser) return res.sendStatus(409);
  try {
    // Encrypt password
    const hashedPw = await bcrypt.hash(password, 10);
    // store the new user
    const newUser = { username: user, hashedPw };
    usersDB.setUsers([...usersDB.users, newUser]);
    await fsPromises.writeFile(
      path.join(__dirname, '..', 'model', 'users.json'),
      JSON.stringify(usersDB.users),
    );
    console.log(usersDB.users);
    res.status(201).json({ success: `New user ${user} created!` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  return null;
};

export default handleNewUser;
