const express = require('express');
const cors = require('cors');

/* EXPRESS*/
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* MONGOOSE */
require('./config/db');

/* CORS*/
app.use(cors());

/* ROUTES */

const productRoutes = require('./routes/product');
const supplierRoutes = require('./routes/supplier');
const clientRoutes = require('./routes/client');
const userRoutes = require('./routes/user');

app.use('/api/product', productRoutes());
app.use('/api/supplier', supplierRoutes());
app.use('/api/client', clientRoutes());
app.use('/api/user', userRoutes());

app.get('/', (req, res) => {
  res.send('Servidor ok');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `DBMarket ~ Online - Running on PORT: ${process.env.PORT || 3000}`
  );
});
