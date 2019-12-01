var tadpoleRankingModel = require('../models/tadpoleRankingModel');

export const GetTadpoleRanking = async (ctx, next) => {
  let res = await tadpoleRankingModel.find({}).sort({ use_time: 1 }).limit(10);
  ctx.body = res;
  next();
}

export const PostTadpoleRanking = async (ctx, next) => {
  let req = ctx.request.body;
  if (!req.name || !req.use_time) {
    ctx.body = '参数错误';
    return;
  }
  let newData = new tadpoleRankingModel({
    name: req.name,
    use_time: req.use_time,
  })
  let success = await newData.save();
  ctx.body = success;
}

export const Get = (ctx, next) => {
  ctx.body = {
    result: 'get',
    name: ctx.params.name,
    para: ctx.query
  }

  next()
}

export const Post = async (ctx, next) => {
  ctx.body = {
    result: 'post',
    name: ctx.params.name,
    para: ctx.request.body
  }

  next()
}

export const Put = (ctx, next) => {
  ctx.body = {
    result: 'put',
    name: ctx.params.name,
    para: ctx.request.body
  }

  next()
}

export const Delete = (ctx, next) => {
  ctx.body = {
    result: 'delete',
    name: ctx.params.name,
    para: ctx.request.body
  }

  next()
}
