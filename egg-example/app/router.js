'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  router.get('/api/search', controller.search.queryTest);
  // 第一步：匹配路由，调用controller中的方法
  // default :  router.get('/', controller.home.index)
  // socket.io: io.of........如下
  io.of('/api/v1/io').route('exchange', controller.ioDefault.exchange);
};
