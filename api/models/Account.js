/**
 * Account.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    email: {
      type: 'string'
    },
    holderName: {
      type: 'string'
    },
    number: {
      type: 'string'
    },
    type: {
      type: 'string',
      enum: ['CHECKING','SAVINGS']
    },
    balance: {
      type: 'float',
      defaultsTo: 0.00
    },
    transactions: {
      collection: 'transactions'
    },
    debitCards: {
      collection: 'debitCard',
      via: 'account'
    },
    transactions: {
      collection: 'transaction'
    }
  }
};
