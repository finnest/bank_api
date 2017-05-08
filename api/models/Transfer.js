/**
 * Transfer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    fromEmail: { type: 'string' },
    fromName: { type: 'string' },
    toEmail: { type: 'string' },
    toName: { type: 'string' },
    amount: { type: 'float' },
    date: {type: 'datetime'}
  }
};
