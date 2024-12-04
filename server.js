const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const jwt = require ('jsonwebtoken');

const app = express ();
const port = 3001;

app.use (cors ());
app.use (bodyParser.json ());

app.get ('/', (req, res) => {
  res.send ('Hello World!');
});

app.listen (port, () => {
  console.log (`Listening at http://localhost:${port}`);
});