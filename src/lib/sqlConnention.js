const Sequelize = require('sequelize')

const sequelize = new Sequelize('mytest','root','root', {
  host:'localhost',
  dialect:'mysql'
});

module.exports.connection = () =>{
  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

}
