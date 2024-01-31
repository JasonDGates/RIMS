import express from 'express';
import cors from 'cors';
import corsOptions from './config/corsOptions.js';
import 'dotenv/config';
import routes from './routes/index.js'

const app = express();

const { PORT } = process.env;

app.use(cors(corsOptions));

app.use(routes);

app.get('/test', (req, res) => {
  res.status(201).send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
