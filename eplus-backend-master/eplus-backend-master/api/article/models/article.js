const slugify = require('slugify');
'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      data.slug = slugify(data.title, {lower: true, strict: true});
    },
    async beforeUpdate(params, data) {
      data.slug = slugify(data.title, {lower: true, strict: true});
    },
  },
};
