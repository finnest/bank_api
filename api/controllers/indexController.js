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
  }
}
