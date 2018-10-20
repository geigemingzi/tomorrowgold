const mongodb = require('mongodb');
const mc = mongodb.MongoClient;
var db;
mc.connect('mongodb://localhost:27017', { useNewUrlParser: true }, (_error, _db) => {
    db = _db.db('tomorrowgold');
});

module.exports = {
    //查询  参数 （表名称，条件）
    select(_collection, _condition = {}) {
        return new Promise((resolve, reject) => {
            db.collection(_collection).find(_condition).toArray().then((result) => {
                resolve(result)
            }).catch((error) => {
                reject(error);
            })
        })
    },
    // 插入  参数 （表名称，插入的数据）
    insert(_collection, _data) {
        return new Promise((resolve, reject) => {
            db.collection(_collection).insert(_data).then((result) => {
                resolve(result)
            }).catch((error) => {
                reject(error);
            })
        })
    },
    // 修改  参数 （表名称，原来内容，更新内容）
    update(_collection, _condition, _data) {
        return new Promise((resolve, reject) => {
            db.collection(_collection).update(_condition, _data).then((res) => {
                resolve(res)
            }).catch((error) => {
                reject(error)
            })
        })
    },
    // 删除 参数 （表名称，删除条件，更新内容）
    delete(_collection, _condition, _data) {
        return new Promise((resolve, reject) => {
            db.collection(_collection).delete(_condition, _data).then((res) => {
                resolve(res)
            }).catch((error) => {
                reject(error)
            })
        })
    }
}