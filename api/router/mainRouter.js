var express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 引入模块
// 连接mongodb的操作模块
var db = require('../mondb');
// 登录模块
var loginModult = require('./loginRouter');
var regModult = require('./regRouter');

// 暴露主模块
module.exports = {
    allRouter : function(app){
        // 请求头设置
        app.all("*", function(req, res, next){
            // res.writeHead(200, {"Content-Type"})
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
            res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
            res.header("X-Powered-By", ' 3.2.1')
            if (req.method == "OPTIONS") {
                res.sendStatus(200);/*让options请求快速返回*/
            } else {
                next();
            }
        });

        // 模块使用
        loginModult.loginClass(app,db);
        regModult.regClass(app, db);
    }
}