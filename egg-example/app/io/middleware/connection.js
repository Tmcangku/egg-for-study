'use strict';
module.exports = app => {
  return async (ctx, next) => {
    ctx.socket.emit('res', 'connected!');// 连接！
    await next();
    // execute when disconnect.
    console.log('disconnection!');// 断开！
    // 和普通的中间件一样，就是洋葱式判断过滤请求的，如果符合，就告诉前端连接上了，就像http不会返回404
  };
};
