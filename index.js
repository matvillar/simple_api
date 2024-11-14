import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
require('dotenv').config();

import routes from './src/routes/crmRoutes.js';
const app = express();
const port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);

// bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
  res.send('Node and express server running' + port);
});

app.listen(port, () => {
  console.log('Server Running on localHost' + port);
});
