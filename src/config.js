// 存放默认配置信息

/**
 * mySQl 配置信息
 */
const mysqlConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'mytest',
  connectionLimit: 10, // 一次创建的最大连接数，默认0
  queueLimit: 0 //连接请求数限制，默认0无限制
}

module.exports = {
  mysqlConfig,
}
