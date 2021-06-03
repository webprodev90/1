const slugify = require('slugify');
'use strict';

/**
 * Lifecycle callbacks for the `page` model.
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
