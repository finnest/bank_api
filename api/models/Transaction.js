/**
 * Transaction.js
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
    },

    account: {
      model: 'account'
    }
  }
};
