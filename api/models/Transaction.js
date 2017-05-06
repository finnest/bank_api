/**
 * Transaction.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    type: {
      type: 'string',
      enum: ['DEPOSIT', 'WITHDRAWAL', 'TRANSFER', 'POS']
    },
    amount: {
      type: 'float'
    },
    runningBalance: {
      type: 'float'
    },
    accountNumber: {
      type: 'string'
    },
    description: {
      type: 'string'
    }
  }
};
