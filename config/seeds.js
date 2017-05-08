/**
 * Sails Seed Settings
 * (sails.config.seeds)
 */

var PARENT_CHECKING_BALANCE = 9876.54;
var KID_CHECKING_BALANCE = 45.67;
var KID_SAVINGS_BALANCE = 123.45;

module.exports.seeds = {
  account: [
    {
      email: 'xuan_cui@brown.edu',
      holderName: 'Xuan Cui',
      type: 'CHECKING',
      balance: PARENT_CHECKING_BALANCE
    },
    {
      email: 'xuan_cui@brown.edu',
      holderName: 'Little Cui',
      type: 'CHECKING',
      balance: KID_CHECKING_BALANCE
    },
    {
      email: 'xuan_cui@brown.edu',
      holderName: 'Little Cui',
      type: 'SAVINGS',
      balance: KID_SAVINGS_BALANCE
    },
    {
      email: 'joe@joe.com',
      holderName: 'Joseph Yoo',
      type: 'CHECKING',
      balance: PARENT_CHECKING_BALANCE
    },
    {
      email: 'joe@joe.com',
      holderName: 'David Yoo',
      type: 'CHECKING',
      balance: KID_CHECKING_BALANCE
    },
    {
      email: 'joe@joe.com',
      holderName: 'David Yoo',
      type: 'SAVINGS',
      balance: KID_SAVINGS_BALANCE
    },
    {
      email: 'parent@parent.com',
      holderName: 'Parent Last',
      type: 'CHECKING',
      balance: PARENT_CHECKING_BALANCE
    },
    {
      email: 'parent@parent.com',
      holderName: 'Kid Last',
      type: 'CHECKING',
      balance: KID_CHECKING_BALANCE
    },
    {
      email: 'parent@parent.com',
      holderName: 'Kid Last',
      type: 'SAVINGS',
      balance: KID_SAVINGS_BALANCE
    },
  ],
  debitCard: [
    {
      cardHolderName: 'Xuan Cui',
      cardNumber: '926415279483',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    },
    {
      cardHolderName: 'Little Cui',
      cardNumber: '383972514624',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    },
    {
      cardHolderName: 'Joseph Yoo',
      cardNumber: '815394168372',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    },
    {
      cardHolderName: 'David Yoo',
      cardNumber: '273861493518',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    },
    {
      cardHolderName: 'Parent Last',
      cardNumber: '192834623497',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    },
    {
      cardHolderName: 'Kid Last',
      cardNumber: '794326438291',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    }
  ]
}
