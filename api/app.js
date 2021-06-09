const express = require('express');
const cors = require('cors');
require('dotenv').config({path: __dirname + '/.env'});
require('./DBModule');
const route = require('./Routes/routing');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', route);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
