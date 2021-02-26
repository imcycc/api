import mongoose from 'mongoose'
import { DB_GAME, DB_BLOG } from '../config'

mongoose.set('useFindAndModify', false);

export var dbgame = mongoose.createConnection(`mongodb://${DB_GAME.username}:${DB_GAME.password}@${DB_GAME.host}:${DB_GAME.port}/${DB_GAME.database}?authSource=admin`);
export var dbblog = mongoose.createConnection(`mongodb://${DB_BLOG.username}:${DB_BLOG.password}@${DB_BLOG.host}:${DB_BLOG.port}/${DB_BLOG.database}?authSource=admin`);

dbgame.on('connected', function (err) {
  if (err) {
    console.log('连接game数据库失败：' + err);
  } else {
    console.log('连接game数据库成功！');
  }
});

dbblog.on('connected', function (err) {
  if (err) {
    console.log('连接blog数据库失败：' + err);
  } else {
    console.log('连接blog数据库成功！');
  }
});
