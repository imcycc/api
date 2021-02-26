import ResponseUtils from '../tool/ResponseUtils';

module.exports = function () {
  return function (ctx, next) {
    return next().catch((err) => {
      switch (err.status) {
        case 401:
          ctx.status = 200
          ctx.body = ResponseUtils.fail('NOT_LOGGED_IN')
          break
        default:
          throw err
      }
    })
  }
}
