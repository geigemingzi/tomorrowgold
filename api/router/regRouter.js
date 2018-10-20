module.exports = {
    regClass: function (app, db) {
        // 登录验证
        app.get('/userReg', function (req, res) {
            // 获取参数
            // var _username = req.query.data;
            var _username = req.query.username;
            var _password = req.query.password;
            console.log(_username, _password)
            // 条件
            // 用户名
            var _where = { username: _username }
            // 注册信息
            var data = {
                username: _username,
                password: _password
            }
            db.select("users", _where).then((result, err) => {
                if (result.length > 0) {
                    res.send(
                        {
                            state: "用户名已存在"
                        }
                    )
                } else {
                    // 用户名不存在就可以注册
                    db.insert("users", data).then(result => {
                        if (result.result.ok) {
                            res.send(result)
                        } else {
                            res.send("注册失败");
                        }
                    })
                }
            })
        })
    }
}