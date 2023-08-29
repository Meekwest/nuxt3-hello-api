'use strict';

/**
 * hello controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hello.hello', ({ strapi }) => ({
    // wrap a core action, leaving core logic in place
    async find(ctx) {
      // some custom logic here
      return 'hello world from strapi!';
    },
  }));