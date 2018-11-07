'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  async sve(name) {
    // const user = await \
    const val = {
      data: [{
        id: 1,
        name: 123,
        age: 333,
        color: 555,
      },
      {
        id: 2,
        name: 123,
        age: 333,
        color: 555,
      },
      {
        id: 3,
        name: 123,
        age: 333,
        color: 555,
      },
      ],
      total: name,
    };
    return val;
  }
}
module.exports = UserService;
