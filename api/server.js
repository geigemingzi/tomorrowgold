var express = require('express');
var app = express();
// 主模块
var mainRouter = require('./router/mainRouter');
mainRouter.allRouter(app)
// 请求头设置
// app.all("*", function (req, res, next) {
//     // res.writeHead(200, {"Content-Type"})
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By", ' 3.2.1')
//     if (req.method == "OPTIONS") {
//         res.sendStatus(200);/*让options请求快速返回*/
//     } else {
//         next();
//     }
// })
// 挂载点
app.listen(1234);