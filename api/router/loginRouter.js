module.exports = {
    loginClass: function(app, db){
        // 登录验证
        app.get('/login', function (req, res) {
            // 获取参数
            var _username = req.query.username;
            var _password = req.query.password;
            console.log(_username, _password)
            // 条件
            var data = {
                username: _username,
                password: _password
            }
            // 数据库查找
            db.select("users",data).then((result,err)=>{
                if(result.length > 0 ){
                    res.send(
                        {
                            state: "登录成功",
                            data: result
                        }
                    )
                }else{
                    res.send(
                        {
                        state:"用户名或密码不正确",
                        data :err
                        }
                        )
                }
            })

        })
    }
}