var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var ObjectId = mongodb.ObjectID;

//链接到数据库
var url = "mongodb://127.0.0.1:27017/";

var db;
MongoClient.connect(url, { useNewUrlParser: true }, function (err, _db) {
    db = _db.db('tomorrowgold');

    //关闭数据库
    // database.close();	
});
module.exports ={
    //操作数据库的代码
    select(_collection, _where){
        console.log(777)
        return db.collection(_collection).find(_where)
    }
}
