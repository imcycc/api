var mongoose = require('mongoose');
import { DB as DBConfig } from '../config'

mongoose.connect('mongodb://' + DBConfig.username + ':' + DBConfig.password + '@' + DBConfig.host + ':' + DBConfig.port + '/' + DBConfig.database);
// 连接成功操作
mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
})

// 连接失败操作
mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
})

// 连接断开操作
mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
})
