'use strict';
const Controller = require('egg').Controller;
const nullObject = {};
const _ = require('lodash');
class SeacrchController extends Controller {
  // constructor(ctx, service) {
  //   super(ctx);
  //   this._service = service;
  // }
  // ctx :Context 指的是 Koa 的请求上下文，这是 请求级别 的对象
  // 每次请求生成一个 Context 实例，通常我们也简写成 ctx。在所有的文档中
  // Context 和 ctx 都是指 Koa 的上下文对象。
  async queryTest(ctx) {
    // SeacrchController.checkParameter(ctx, { required: [ 'name' ] });
    // ctx.body = `search: ${ctx.query.name}`;
    ctx.body = await ctx.service.home.sve(ctx.query.name); // service——>home->sve
  }

  static checkParameter(ctx, options) {
    if (!ctx) { throw { code: '1001', message: 'business error' }; }
    if (!options) { return nullObject; }
    const required = options.required;
    const optional = options.optional;
    const original = _.extendWith(ctx.query.body || {}, ctx.query.query || {}, ctx.params || {});
    if (required) {
      required.forEach(c => {
        if (!_.hasIn(original, c)) { throw { code: '1002', message: `参数 ${c} 缺失` }; }
      });
    }
    ctx.data = _.pick(original, _.union(required || [], optional || []));
  }
}


module.exports = SeacrchController;
