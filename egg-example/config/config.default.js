'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1541506730527_4858';

  // add your config here
  config.middleware = [];
  config.multipart = {
    fileSize: '50mb',
    whitelist: [ '.tar' ],
  };

  exports.io = {
    init: {}, // passed to engine.io
    namespace: {
      '/api/v1/io': {
        connectionMiddleware: [ 'connection' ],
        packetMiddleware: [],
      },
      '/api/v1/io/test': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
  };
  return config;
};
