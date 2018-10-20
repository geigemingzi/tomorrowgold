module.exports = {
    goodsClass: function (app, db) {
        // 商品列表获取
        app.get('/goodslist', function (req, res) {
            db.select('goods').then(result=>{
                res.send(result)
            })
        });

        // 商品分页获取
        app.post('/goodspage', function (req, res) {
            // 获取第几页
            var page = req.query.page;
            var count = 10;//查询个数
            var start = (page - 1) * count;
           
            //异步请求
            //分页
            var promise1 = new Promise(function (resolve) {
                db.collection('goods').find(where).skip(start).limit(count).toArray((err, result) => {
                    resolve(result);
                    // res.end(JSON.stringify(result));
                })
            })
            //总页数
            var promise2 = new Promise(function (resolve) {

                //回调函数只有一个参数
                db.collection('goods').find(where).count().then(result => {
                    // 返回 总页数
                    resolve(Math.ceil(result / count))
                })
            })

            // 等待上面两个异步执行完成后 再执行
            Promise.all([promise1, promise2]).then(function (result) {
                var data = {
                    goodslist: result[0],
                    maxpage: result[1]
                }
                res.send(data);
            })
        })
    }
}