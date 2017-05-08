/**
 * Sails Seed Settings
 * (sails.config.seeds)
 */

var faker = require('faker');

var HOMER_CHECKING_ACC_NUM =  '642443064880855';
var MARGE_CHECKING_ACC_NUM =  '752718289690772';
var LISA_CHECKING_ACC_NUM =  '112737496656568';
var LISA_SAVINGS_ACC_NUM =  '470625158828918';
var BART_CHECKING_ACC_NUM =  '191817653410033';
var BART_SAVINGS_ACC_NUM =  '308511982982083';
var MAGGIE_CHECKING_ACC_NUM = '296418390621310';
var MAGGIE_SAVINGS_ACC_NUM =  '545257371070699';

var parentAccNums = [
  HOMER_CHECKING_ACC_NUM,
  MARGE_CHECKING_ACC_NUM
]

var kidAccountNums = [
  LISA_CHECKING_ACC_NUM,
  LISA_SAVINGS_ACC_NUM,
  BART_CHECKING_ACC_NUM,
  BART_SAVINGS_ACC_NUM,
  MAGGIE_CHECKING_ACC_NUM,
  MAGGIE_SAVINGS_ACC_NUM
];

var transfers = [];
for (var i = 0; i < 70; i++) {
  var senderNum = faker.random.arrayElement(parentAccNums);
  var recipNum = faker.random.arrayElement(kidAccountNums);
  var amount = faker.finance.amount(1,20,1);

  var date = faker.date.between('2017-01-01', '2017-06-01');

  transfers.push({
    senderNumber: senderNum,
    recipientNumber: recipNum,
    amount: amount,
    createdAt: date
  });
}

for (var i = 0; i < 35; i++) {
  var senderNum = faker.random.arrayElement(kidAccountNums);
  var recipNum = faker.random.arrayElement(kidAccountNums);
  var amount = faker.finance.amount(1,10,2);

  var date = faker.date.between('2017-01-01', '2017-06-01');

  transfers.push({
    senderNumber: senderNum,
    recipientNumber: recipNum,
    amount: amount,
    createdAt: date
  });
}

module.exports.seeds = {
  account: [
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Homer Simpson',
      type: 'CHECKING',
      balance: 9876.54,
      number: HOMER_CHECKING_ACC_NUM
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Marge Simpson',
      type: 'CHECKING',
      balance: 12876.54,
      number: MARGE_CHECKING_ACC_NUM
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Lisa Simpson',
      type: 'CHECKING',
      balance: 150.50,
      number: LISA_CHECKING_ACC_NUM
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Lisa Simpson',
      type: 'SAVINGS',
      balance: 300.25,
      number: LISA_SAVINGS_ACC_NUM
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Bart Simpson',
      type: 'CHECKING',
      balance: 73.91,
      number: BART_CHECKING_ACC_NUM
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Bart Simpson',
      type: 'SAVINGS',
      balance: 12.49,
      number: BART_SAVINGS_ACC_NUM
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Maggie Simpson',
      type: 'CHECKING',
      balance: 10.00,
      number: MAGGIE_CHECKING_ACC_NUM
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Maggie Simpson',
      type: 'SAVINGS',
      balance: 60.00,
      number: MAGGIE_SAVINGS_ACC_NUM
    }
  ],
  debitCard: [
    {
      cardHolderName: 'Homer Simpson',
      cardNumber: '926415279483',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    },
    {
      cardHolderName: 'Marge Simpson',
      cardNumber: '383972514624',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    },
    {
      cardHolderName: 'Lisa Simpson',
      cardNumber: '815394168372',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    },
    {
      cardHolderName: 'Bart Simpson',
      cardNumber: '273861493518',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    },
    {
      cardHolderName: 'Maggie Simpson',
      cardNumber: '192834623497',
      cardExpirationMonth: 10,
      cardExpirationYear: 2020
    }
  ],
  transfer: transfers
}
