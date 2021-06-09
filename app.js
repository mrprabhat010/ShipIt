const express = require('express');
const cors = require('cors');
require('dotenv').config({path: __dirname + '/.env'});
require('./DBModule');
const route = require('./Routes/routing');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/', route);
app.use(express.static(path.join(__dirname, "client", "build")))

const port = process.env.PORT || 5000;
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
