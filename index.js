const express = require('express');
const app = express();
const port = 3000;

/* MONGOOSE */
require('./config/db');

app.get('/', (req, res) => {
  res.send('Servidor ok');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
