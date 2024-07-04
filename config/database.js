const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('learn-sequelize', 'postgres', '1324', {
  dialect: 'postgres',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection successful!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
