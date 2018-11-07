'use strict';
module.exports = {
  schedule: {
    cron: '*/5 * * * * ?', // 每月执行一次
    type: 'worker', // 指定只有一个 worker 执行
  },
  async task(ctx) {
    const BroadcastMsgService = ctx.service.broadcastMsg;

    if (BroadcastMsgService.getClients() > 0) {
      console.log('每 5 秒执行');
      BroadcastMsgService.broadcastMsg();
    }
  },
};
