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
      balance: 9876.54
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Marge Simpson',
      type: 'CHECKING',
      balance: 12876.54
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Lisa Simpson',
      type: 'CHECKING',
      balance: 340.50
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Lisa Simpson',
      type: 'SAVINGS',
      balance: 1000.25
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Bart Simpson',
      type: 'CHECKING',
      balance: 73.91
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Bart Simpson',
      type: 'SAVINGS',
      balance: 12.49
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Maggie Simpson',
      type: 'CHECKING',
      balance: 10.00
    },
    {
      email: 'homer_simpson@duffmail.net',
      holderName: 'Maggie Simpson',
      type: 'SAVINGS',
      balance: 60.00
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
