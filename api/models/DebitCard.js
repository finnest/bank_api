/**
 * DebitCard.js
 */

module.exports = {
  attributes: {
    account: {
      model: 'account'
    },
    cardHolderName: {type: 'string'},
    cardNumber: {type: 'string'},
    cardExpirationMonth: {
      type: 'integer',
      enum: [1,2,3,4,5,6,7,8,9,10,11,12]
    },
    cardExpirationYear: {
      type: 'integer',
      size: 4
    }
  }
};
