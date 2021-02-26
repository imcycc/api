import {
  TadpoleRankingModel,
} from '../models';
import ResponseUtils from '../tool/ResponseUtils';

export const FindTadpoleRanking = async (ctx, next) => {
  console.log('1234')
  try {
    let res = await TadpoleRankingModel.find().sort({ use_time: 1 }).limit(10);
    ctx.body = ResponseUtils.success(res);
  } catch (error) {
    ctx.body = ResponseUtils.fail();
  }

  next();
}

export const CreateTadpoleRanking = async (ctx, next) => {
  let req = ctx.request.body;
  if (!req.name || !req.use_time) {
    ctx.body = '参数错误';
    return;
  }

  try {
    let newData = new TadpoleRankingModel({
      name: req.name,
      use_time: req.use_time,
    })
    await newData.save();
    ctx.body = ResponseUtils.success();
  } catch (error) {
    ctx.body = ResponseUtils.fail();
  }

  next();
}
