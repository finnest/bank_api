module.exports = {
	deposit: function(req, res, next) {
		var accountNumber = req.param('accountNumber');
		var amount = parseFloat(req.param('amount'));
		var balance = req.param('balance');
		var description = req.param('description') || '';

		Account.findOne({number: accountNumber})
			.then(function(account) {
				var updatedBalance = amount + account.balance;

				Transaction.create({
					type: 'DEPOSIT',
					amount: amount,
					runningBalance: updatedBalance,
					accountNumber: account.number,
					description: description
				})
					.then(function(transaction) {

						Account.update({number:account.number},{balance:transaction.runningBalance})
							.then(function(updated){
								// notify Finnest API of updated account
								// send updated[0] (account)
								// send transaction
								res.json(updated[0]);
							})
							.catch(function(err) {return next(err)});
					})
					.catch(function(err) {return next(err)});
			})
			.catch(function(err) {return next(err)});
	},

	withdraw: function(req, res, next) {
		var accountNumber = req.param('accountNumber');
		var amount = parseFloat(req.param('amount'));
		var description = req.param('description') || '';

		Account.findOne({number: accountNumber})
			.then(function(account) {
				var updatedBalance = account.balance - amount;

				Transaction.create({
					type: 'WITHDRAWAL',
					amount: amount,
					runningBalance: updatedBalance,
					accountNumber: account.number,
					description: description
				})
					.then(function(transaction) {

						Account.update({number:account.number},{balance:transaction.runningBalance})
							.then(function(updated){
								// notify Finnest API of updated account
								// send updated[0] (account)
								// send transaction
								res.json(updated[0]);
							})
							.catch(function(err) {return next(err)});
					})
					.catch(function(err) {return next(err)});
			})
			.catch(function(err) {return next(err)});
	},

	transfer: function(req, res, next) {
		var to = req.param('to');
		var from = req.param('from');
		var amount = parseFloat(req.param('amount'));

		Account.findOne({number: from})
			.then(function(sender) {
				Account.findOne({number: to})
					.then(function(recipient) {

						Transfer.create({
							from: from,
							to: to,
							amount: amount
						})
							.then(function(transfer) {
								var updatedSenderBalance = sender.balance - amount;
								var updatedRecipientBalance = recipient.balance + amount;

								Account.update({number:from},{balance:updatedSenderBalance})
								.then(function(updatedSender){
									Account.update({number:to},{balance:updatedRecipientBalance})
									.then(function(updatedRecipient){
										// notify Finnest API of updated account
										// send updated[0] (account)
										// send transaction
										res.json({
											transfer: transfer,
											sender: updatedSender[0],
											recipient: updatedRecipient[0]
										});
									})
									.catch(function(err) {return next(err)});
								})
								.catch(function(err) {return next(err)});
							})
							.catch(function(err) {return next(err)});
					})
					.catch(function(err) {return next(err)});
			})
			.catch(function(err) {return next(err)});

	},

	pos: function(req, res, next) {
		var cardNumber = req.param('cardNumber');
		var cardExpirationMonth = parseInt(req.param('cardExpirationMonth'));
		var cardExpirationYear = parseInt(req.param('cardExpirationYear'));
		var amount = parseFloat(req.param('amount'));

		DebitCard.findOne({cardNumber:cardNumber})
			.populate('account')
			.then(function(debitCard) {
				var updatedBalance = debitCard.account.balance - amount;
				Account.update({number:debitCard.account.number},{balance:updatedBalance})
					.then(function(updated) {
						res.json({
							account: updated[0]
						});
					})
					.catch(function(err) {return next(err)});
			})
			.catch(function(err) {return next(err)});
	}
};
