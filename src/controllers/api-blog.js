import {
  ArticleModel,
  ArticleTagModel,
} from '../models';
import ResponseUtils from '../tool/ResponseUtils';

// 新增文章
export const CreateArticle = async (ctx, next) => {
  let req = ctx.request.body;

  try {
    let newData = new ArticleModel({
      ...req,
      create_at: +new Date(),
    })
    await newData.save();
    ctx.body = ResponseUtils.success();
  } catch (error) {
    ctx.body = ResponseUtils.fail();
  }

  next();
}

// 删除文章
export const DeleteArticle = async (ctx, next) => {
  let { _id } = ctx.request.body;

  try {
    await ArticleModel.findOneAndUpdate({ delete_at: null, _id }, {
      delete_at: +new Date(),
    })
    ctx.body = ResponseUtils.success();
  } catch (error) {
    ctx.body = ResponseUtils.fail();
  }

  next();
}

// 更新文章
export const UpdateArticle = async (ctx, next) => {
  let { _id, ...other } = ctx.request.body;

  try {
    await ArticleModel.findOneAndUpdate({ delete_at: null, _id }, {
      ...other,
      update_at: +new Date(),
    })
    ctx.body = ResponseUtils.success();
  } catch (error) {
    ctx.body = ResponseUtils.fail();
  }

  next();
}

// 查找文章详情
export const FindArticle = async (ctx, next) => {
  let { _id } = ctx.query;

  try {
    let res = await ArticleModel.findOne({ delete_at: null, _id });
    res = res.toObject()

    // 添加字段 tags (标签)
    let tags = await ArticleTagModel.find({ delete_at: null });
    let selectedTags = res.tag_ids.map(_id => tags.find(tag => tag._id == _id))
    res.tags = selectedTags

    ctx.body = ResponseUtils.success(res);
  } catch (error) {
    console.log(error)
    ctx.body = ResponseUtils.fail();
  }

  next();
}

// 查找文章列表
export const FindAllArticle = async (ctx, next) => {
  try {
    let { page, page_size, tag_id } = ctx.query;

    let queryParams = { delete_at: null }

    if (tag_id) {
      queryParams.tag_ids = { $elemMatch: { $eq: tag_id } }
    }

    let res = await ArticleModel
      .find(queryParams, { markdown: 0 })
      .sort({ create_at: -1 })

    res = res.map(d => d.toObject())

    if (res && res.length) {
      // 添加字段 tags (标签)
      let tags = await ArticleTagModel.find({ delete_at: null });
      res.forEach(article => {
        let selectedTags = article.tag_ids.map(_id => tags.find(tag => tag._id == _id))
        article.tags = selectedTags
      })
    }

    ctx.body = ResponseUtils.success(res);
  } catch (error) {
    ctx.body = ResponseUtils.fail();
  }

  next();
}


// 新增标签
export const CreateTag = async (ctx, next) => {
  let req = ctx.request.body;

  try {
    let newData = new ArticleTagModel({
      ...req,
      create_at: +new Date(),
    })
    await newData.save();
    ctx.body = ResponseUtils.success();
  } catch (error) {
    ctx.body = ResponseUtils.fail();
  }

  next();
}

// 删除标签
export const DeleteTag = async (ctx, next) => {
  let { _id } = ctx.request.body;

  try {
    await ArticleTagModel.findOneAndUpdate({ delete_at: null, _id }, {
      delete_at: +new Date(),
    })
    ctx.body = ResponseUtils.success();
  } catch (error) {
    ctx.body = ResponseUtils.fail();
  }

  next();
}

// 更新标签
export const UpdateTag = async (ctx, next) => {
  let { _id, ...other } = ctx.request.body;

  try {
    await ArticleTagModel.findOneAndUpdate({ delete_at: null, _id }, {
      ...other,
      update_at: +new Date(),
    })
    ctx.body = ResponseUtils.success();
  } catch (error) {
    ctx.body = ResponseUtils.fail();
  }

  next();
}

// 查找所有标签
export const FindAllTag = async (ctx, next) => {
  try {
    let res = await ArticleTagModel.find({ delete_at: null });
    ctx.body = ResponseUtils.success(res);
  } catch (error) {
    ctx.body = ResponseUtils.fail();
  }

  next();
}
