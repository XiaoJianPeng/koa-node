const Sequelize = require('sequelize')

// 建立连接
// const sequelize = new Sequelize('mytest','root','root', {
//   host:'localhost',
//   dialect:'mysql'
// });

/**
 * 连接池
 */
const sequelize = new Sequelize('mytest', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

module.exports.connection = () =>{
  // 测试连接
  sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
}
