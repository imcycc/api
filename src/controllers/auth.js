import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'
import ResponseUtils from '../tool/ResponseUtils';

const publicKey = fs.readFileSync(path.join(__dirname, '../../publicKey.pub'))

/**
 * 检查授权是否合法
 */
const CheckAuth = (ctx) => {
  const token = ctx.request.header.authorization
  try {
    const decoded = jwt.verify(token.substr(7), publicKey)
    if (decoded.userInfo) {
      return ResponseUtils.success(decoded.userInfo)
    } else {
      return ResponseUtils.fail('NOT_LOGGED_IN')
    }
  } catch (err) {
    return ResponseUtils.fail()
  }
}

export const Check = (ctx, next) => {
  ctx.body = CheckAuth(ctx)
  next()
}

/**
 * 登录
 * @param {*} ctx 
 * @param {*} next 
 */
export const Login = (ctx, next) => {
  let { account, pwd } = ctx.request.body;

  if (!(account == 'admin' && pwd == 'admin')) {
    ctx.body = ResponseUtils.fail('PARAMETER_ERROR', '账号或密码错误')
    next()
    return
  }

  let token = jwt.sign({
    userInfo: {
      account: 'admin'
    } 
  }, publicKey, { expiresIn: '7d' })
  ctx.body = ResponseUtils.success(token)
  next()
}
