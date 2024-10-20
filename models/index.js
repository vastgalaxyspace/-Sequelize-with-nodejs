const sequelize = require('../utils/db');
const Movie = require('./movie');

const initDb = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established.');
    await sequelize.sync({ force: false }); // Sync models to DB
    console.log('Models synced.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = { initDb, Movie };
