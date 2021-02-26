
const ResponseEnum = {
  SUCCESS: 0,
  PARAMETER_ERROR: 40000,
  NOT_LOGGED_IN: 40001,
  SERVER_ERROR: 50000,
  properties: {
    0: { code: 0, message: 'ok' },
    40000: { code: 40000, message: '参数错误' },
    40001: { code: 40001, message: '未登录' },
    50000: { code: 50000, message: '蹦沙卡拉卡' },
  }
}


const success = (data) => {
  const obj = ResponseEnum.properties[ResponseEnum.SUCCESS];
  return ({
    code: obj.code,
    data: data || null,
    message: obj.message,
  })
}

const fail = (resEnum = 'SERVER_ERROR', errorDes) => {
  const obj = ResponseEnum.properties[ResponseEnum[resEnum]];
  return ({
    code: obj.code,
    data: null,
    message: errorDes || obj.message,
  })
}

module.exports = {
  success,
  fail,
}