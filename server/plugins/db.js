module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.connect('mongodb://127.0.0.1:27017/node-vue-moba', {
    useNewUrlParser: true
  })
  //用于引用各种模型 如a引用b
  require('require-all')(__dirname+'/../models')
}