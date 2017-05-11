module.exports = {
	deposit: function(req, res, next) {
		var email = req.body.email;
		var amount = parseFloat(req.body.amount);
		var description = req.body.description || "";

		Account.findOne({email: email})
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
		var to = req.body.to;
		var from = req.body.from;
		var amount = parseFloat(req.body.amount);

		Account.findOne({
			email: from.email,
			holderName: from.name,
			type: from.type})
			.then(function(sender) {
				Account.findOne({
					email: to.email,
					holderName: to.name,
					type: to.type})
					.then(function(recipient) {

						Transfer.create({
							senderNumber: sender.number,
							recipientNumber: recipient.number,
							amount: amount
						})
							.then(function(transfer) {
								var updatedSenderBalance = sender.balance - amount;
								var updatedRecipientBalance = recipient.balance + amount;

								Account.update({number: sender.number},{balance:updatedSenderBalance})
								.then(function(updatedSender){
									Account.update({number:recipient.number},{balance:updatedRecipientBalance})
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
