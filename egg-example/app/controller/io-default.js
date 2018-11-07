'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async exchange() {
    const { ctx, app } = this;
    // const nsp = app.io.of('/api/v1/io');
    console.log(ctx.query, '获取ctx.query'); // 获取ctx.query{ room: 'demo',userId: 'client_0.8720664340200737',EIO: '3',transport: 'websocket' }
    console.log(ctx.args[0] || {}, '获取ws发送的消息'); // 获取ws发送的消息 { target: 'exchange-client', payload: 'xxx' }
    const message = ctx.args[0] || {};
    const client = ctx.socket.id;
    console.log(ctx.socket.id, '获取id');// /api/v1/io#eMltxqdAbIQD7zP6AAAA

    try {
      console.log(message, '获取message');
      const { target, payload } = message;// { target: 'exchange-client', payload: 'xxx' }
      if (!target) return;// 前端 emit的时候socket.emit('exchange', {target: 'exchange-client', payload: 'xxx'})
      const msg = ctx.helper.parseMsg('exchange', payload, { client, target });// 在 extend 中有ctx.helper.parsseMsg
      ctx.service.broadcastMsg.sendMsg(client, msg);// 调servic中的函数 并将ID及获取到的信息传入
    } catch (error) {
      app.logger.error(error);
    }
  }
}

module.exports = DefaultController;
