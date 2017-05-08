module.exports = {

  index: function(req, res, next) {
    Account.find()
      .populate('debitCards', {
        limit: 10
      })
      .then(function(accounts) {
        res.view('index', {
          accounts: accounts
        });
      })
      .catch(function(err) { return next(err) });
  },

  allTransfers: function(req,res) {
    Transfer.find()
      .sort('createdAt ASC')
      .then(function(transfers) {
        res.json(transfers);
      })
      .catch(function(err){return next(err)});
  }
}
