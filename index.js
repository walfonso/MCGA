const express = require('express');

/* EXPRESS*/
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* MONGOOSE */
require('./config/db');

/* ROUTES */
const productRoutes = require('./routes/product');

app.use('/api/product', productRoutes());

app.get('/', (req, res) => {
  res.send('Servidor ok');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `DBMarket ~ Online - Running on PORT: ${process.env.PORT || 3000}`
  );
});
