import ResponseUtils from '../tool/ResponseUtils';

export const Options = async (ctx, next) => {
  ctx.body = ResponseUtils.success();

  next();
}
