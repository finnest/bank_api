/**
 * Sails Seed Settings
 * (sails.config.seeds)
 */

module.exports.seeds = {
  account: [
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Homer Simpson',
      type: 'CHECKING',
      balance: 9876.54,
      number: '642443064880855'
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Marge Simpson',
      type: 'CHECKING',
      balance: 12876.54,
      number: '752718289690772'
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Lisa Simpson',
      type: 'CHECKING',
      balance: 340.50,
      number: '112737496656568'
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Lisa Simpson',
      type: 'SAVINGS',
      balance: 1000.25,
      number: '470625158828918'
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Bart Simpson',
      type: 'CHECKING',
      balance: 73.91,
      number: '191817653410033'
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Bart Simpson',
      type: 'SAVINGS',
      balance: 12.49,
      number: '308511982982083'
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Maggie Simpson',
      type: 'CHECKING',
      balance: 10.00,
      number: '296418390621310'
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Maggie Simpson',
      type: 'SAVINGS',
      balance: 60.00,
      number: '545257371070699'
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
  ]
}
