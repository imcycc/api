import {
  ArticleModel,
} from '../models';
import ResponseUtils from '../tool/ResponseUtils';

export const CreateArticle = async (ctx, next) => {
  let req = ctx.request.body;

  try {
    let newData = new ArticleModel({
      ...req,
      create_at: new Date(),
    })
    await newData.save();
    ctx.body = ResponseUtils.success();
  } catch (error) {
    ctx.body = ResponseUtils.fail();
  }

  next();
}

export const DeleteArticle = async (ctx, next) => {
  let { _id } = ctx.request.body;

  try {
    await ArticleModel.findOneAndUpdate({ delete_at: null, _id }, {
      delete_at: new Date(),
    })
    ctx.body = ResponseUtils.success();
  } catch (error) {
    ctx.body = ResponseUtils.fail();
  }

  next();
}

export const UpdateArticle = async (ctx, next) => {
  let { _id, ...other } = ctx.request.body;

  try {
    await ArticleModel.findOneAndUpdate({ delete_at: null, _id }, {
      ...other,
      update_at: new Date(),
    })
    ctx.body = ResponseUtils.success();
  } catch (error) {
    ctx.body = ResponseUtils.fail();
  }

  next();
}

export const FindArticle = async (ctx, next) => {
  let { _id } = ctx.query;

  try {
    let res = await ArticleModel.findOne({ delete_at: null, _id });
    ctx.body = ResponseUtils.success(res);
  } catch (error) {
    ctx.body = ResponseUtils.fail();
  }

  next();
}

export const FindAllArticle = async (ctx, next) => {
  try {
    let res = await ArticleModel.find({ delete_at: null });
    ctx.body = ResponseUtils.success(res);
  } catch (error) {
    ctx.body = ResponseUtils.fail();
  }

  next();
}
