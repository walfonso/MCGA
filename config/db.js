const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });

mongoose
  .connect(process.env.MONGO_URI, { UseNewUrlParser: true })
  .then(() => {
    console.log(`Database: DBMarket ..... Ok`);
  })
  .catch((e) => {
    console.error(e);
  });
