const express = require('express');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');
const { initDb } = require('./models');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api', movieRoutes);

initDb();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
