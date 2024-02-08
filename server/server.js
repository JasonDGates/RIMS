import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import mongoose from 'mongoose';

import corsOptions from './config/corsOptions.js';
import sessionOptions from './config/sessionOptions.js';
import 'dotenv/config';
import routes from './routes/index.js';
import connectDB from './config/dbConnection.js';

connectDB();

const app = express();

const { PORT } = process.env;

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser('helloworld'));
// Session options are in config folder
app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.get('/test', (req, res) => {
  req.session.visited = true;
  res.cookie('hello', 'world', { maxAge: 30000, signed: true });
  res.status(201).send('Hello World');
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
