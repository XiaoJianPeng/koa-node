const Sequelize = require('sequelize')
const Model = Sequelize.Model;

class User extends Model {

}

User.init({
  name:{
    type:Sequelize.STRING, // 字段类型
    allowNull: false // 是否允许为空 ,不设置默认为true
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: true
  }
},{
  sequelize,
  modelName: 'user'
})

// 注意:如果表已经存在,使用`force:true`将删除该表
User.sync({
  alter: true
}).then(() => {
  // 现在数据库中的 `users` 表对应于模型定义
  return User.create({
    firstName: 'John',
    lastName: 'Hancock'
  });
});
