'use strict';
const Service = require('egg').Service;
const clients = {};

class BroadcastService extends Service {
    constructor(ctx) {
        super(ctx);
    }
    sendMsg(client, msg) {
        const { app } = this;
        msg.message = {
            pos: {
                x: 56.459961718153444,
                y: -2.978042062146389,
                floor: 1,
            },
            ads: [{
                title: '广告',
                content: '内容，内容内容',
            }]
        };
        const nsp = app.io.of('/api/v1/io');
        nsp.emit(client, msg);
        clients[client] = msg;
    }

    getClients() {
        return Object.keys(clients).length;
    }

    /**
     * 多次执行消息推送
     */
    broadcastMsg() {
        const { app } = this;

        Object.keys(clients).forEach(key => {
            const nsp = app.io.of('/api/v1/io');///api/v1/  之前写错了，写成/api/vl/，就是一直在推，但是前端并没有收到
            clients[key].message = {
                pos: {
                    x: 56.459961718153444 + Math.random()*2,
                    y: -2.978042062146389 + Math.random(),
                    floor: 1,
                },
                ads: [{
                    title: '广告',
                    content: '内容，内容内容3',
       }]
      };
      nsp.emit(key, clients[key]);

    });
  }
}

module.exports = BroadcastService;
