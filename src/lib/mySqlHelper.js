const mySql = require('mysql')
const { mysqlConfig } = require('../config')

// 创建连接线程池
const pool = mySql.createPool(mysqlConfig)

const createTable = (sql = feedback) => {
  return query(sql, [])
}

const query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) =>{
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          console.log('sql:', sql, '\n =========== values:',values)
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

/**
 * 反馈表创建脚本
 */
const feedback = `CREATE TABLE feedback (
platform VARCHAR(255) NOT NULL COMMENT '平台',
screenshot VARCHAR(255) DEFAULT NULL COMMENT '截图地址',
description VARCHAR(1024) DEFAULT NULL COMMENT '描述信息',
user json DEFAULT NULL COMMENT '用户',
device VARCHAR(255) DEFAULT NULL COMMENT '子平台信息',
deviceInfo json DEFAULT NULL COMMENT '设备信息',
appName VARCHAR(255) NOT NULL COMMENT '应用名称',
appVersion VARCHAR(255) DEFAULT NULL COMMENT '版本号',
appId VARCHAR(255) NOT NULL COMMENT '应用Id',
screenName VARCHAR(255) DEFAULT NULL COMMENT '页面名称',
env VARCHAR(255) DEFAULT NULL COMMENT '运行环境',
id VARCHAR(64) NOT NULL COMMENT '主键',
createdAt datetime(6) NOT NULL COMMENT '添加时间',
PRIMARY KEY(id)
) ENGINE = INNODB DEFAULT CHARSET = utf8;
`

module.exports = {
  query,
  createTable
}
