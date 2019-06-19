const Koa = require('koa')
const static = require('koa-static')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')

const app = new Koa()

// 解决跨域请求问题
app.use(cors({
  origin: '*',
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
}))

// 设置静态资源目录
app.use(static(path.resolve(__dirname, './public')))

app.use(bodyParser())


// app.use(require('./routes/crash').routes())


app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

app.listen(3000, (err) => {
  console.log('Node app is running on port:', 3000)

  // 注册全局未捕获异常处理器
  process.on('uncaughtException', (err) => {
    console.error('Caught exception:', err.stack)
  })
  process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason.stack)
  })
})
