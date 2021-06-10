const express = require('express');
const cors = require('cors');
const path = require("path")
require('dotenv').config({path: __dirname + '/.env'});
require('./DBModule');
const route = require('./Routes/routing');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use('/', route);
app.use(express.static(path.join(__dirname, "client", "build")))


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
