/**
 * AccountController
 *
 * @description :: Server-side logic for managing accounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req,res,next) {
		var randomAccountNum = Math.floor(100000000000 + Math.random() * 900000000000);

		req.body.email = req.body.email,
		req.body.type = req.body.type,
		req.body.balance = parseFloat(req.body.balance),
		req.body.number = randomAccountNum.toString();

		Account.create(req.body)
			.then(function(account) {
				res.json(account);
			})
			.catch(function(err){ return next(err) });
	},

	balances: function(req, res, next) {
		var email = req.param('email');

		Account.find({email:email})
			.then(function(accounts) {
				var resData = [];

				accounts.forEach(function(account) {
					resData.push({
						type: account.type,
						number: account.number.slice(-4),
						balance: account.balance,
						holderName: account.holderName
					});
				});

				res.json(resData);
			})
			.catch(function(err){ return next(err) });
	},

	transactions: function(req, res, next) {
		var email = req.param('email');
		var holderName = req.param('holderName');

		Account.findOne({
			email: email,
			holderName: holderName
		})
		.exec(function(err,account){
			if (err) return next(err);

			Transaction.find({ accountNumber: account.number })
			.sort('createdAt ASC')
			.exec(function(err,transactions){
				if (err) return next(err);

				res.json(transactions);
			})
		});
	},

	transfers: function(req, res, next) {
		// transfers for recipient/kid

		var email = req.param('email');
		var holderName = req.param('holderName');

		Account.findOne({
			email: email,
			holderName: holderName
		}).exec(function(err,account){
			if (err) return next(err);

			Transfer.find({recipientNumber: account.number})
				.exec(function(err,transfers){
					if (err) return next(err);

					res.json(transfers);
				});
		})

	}

};
