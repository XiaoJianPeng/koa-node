- [官方文档地址](https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/getting-started.md)

## 安装
Sequelize 可通过 npm ( 或 yarn ) 获得.
`npm install --save sequelize`

手动安装对应的数据库

```
# 选择对应的安装:
$ npm install --save pg pg-hstore # Postgres
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
$ npm install --save tedious # Microsoft SQL Server
```

**本文档以MySQL数据库为例**

## 建立连接

- 单个实例连接

  ``` js
  const Sequelize = require('sequelize');

  //方法1:单独传递参数
  const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
  });
  ```

- 连接池 [Sequelize构造函数API参考](https://github.com/demopark/sequelize-docs-Zh-CN/blob/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor)

  ``` js
  const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  })
  ```

- 测试连接

  ``` js
  connection = () =>{
    sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
  }
  connention()
  ```

- 关闭连接
  Sequelize 将默认保持连接持续,并对所有查询使用相同的连接. 如果需要关闭连接,请调用`sequelize.close()`(这是异步的并返回Promise).

- [Sequelize-Constructor详细参数说明](http://docs.sequelizejs.com/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor)
