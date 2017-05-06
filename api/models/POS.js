/**
 * POS.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    amount: {type: 'float'},
    cardNumber: {type: 'string'},
    cardExpirationMonth: {
      type: 'integer',
      enum: [1,2,3,4,5,6,7,8,9,10,11,12]
    },
    cardExpirationYear: {
      type: 'integer',
      size: 4
    },
    merchantCode: {type: 'integer'},
    description: {type: 'string'},
    date: {type: 'datetime'}

  }
};
