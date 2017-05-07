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
      type: 'CHECKING',
      balance: PARENT_CHECKING_BALANCE
    },
    {
      email: 'cuixuan0603@hotmail.com',
      type: 'CHECKING',
      balance: KID_CHECKING_BALANCE
    },
    {
      email: 'cuixuan0603@hotmail.com',
      type: 'SAVINGS',
      balance: KID_SAVINGS_BALANCE
    },
    {
      email: 'joe@joe.com',
      type: 'CHECKING',
      balance: PARENT_CHECKING_BALANCE
    },
    {
      email: 'dave@dave.com',
      type: 'CHECKING',
      balance: KID_CHECKING_BALANCE
    },
    {
      email: 'dave@dave.com',
      type: 'SAVINGS',
      balance: KID_SAVINGS_BALANCE
    },
    {
      email: 'parent@parent.com',
      type: 'CHECKING',
      balance: PARENT_CHECKING_BALANCE
    },
    {
      email: 'kid@kid.com',
      type: 'CHECKING',
      balance: KID_CHECKING_BALANCE
    },
    {
      email: 'kid@kid.com',
      type: 'SAVINGS',
      balance: KID_SAVINGS_BALANCE
    },
  ],
  debitCard: [
    {
      cardHolderName: 'Parent Xuan',
      cardNumber: '926415279483',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    },
    {
      cardHolderName: 'Kid Xuan',
      cardNumber: '383972514624',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    },
    {
      cardHolderName: 'Parent Joe',
      cardNumber: '815394168372',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    },
    {
      cardHolderName: 'Kid Joe',
      cardNumber: '273861493518',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    },
    {
      cardHolderName: 'Parent Lastname',
      cardNumber: '192834623497',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    },
    {
      cardHolderName: 'Kid Lastname',
      cardNumber: '794326438291',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    }
  ]
}
