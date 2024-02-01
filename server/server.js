import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';

import corsOptions from './config/corsOptions.js';
import sessionOptions from './config/sessionOptions.js';
import 'dotenv/config';
import routes from './routes/index.js';

const app = express();

const { PORT } = process.env;

app.use(cors(corsOptions));
app.use(cookieParser('helloworld'));
app.use(session(sessionOptions));

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

app.get('/test', (req, res) => {
  req.session.visited = true;
  res.cookie('hello', 'world', { maxAge: 30000, signed: true });
  res.status(201).send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
