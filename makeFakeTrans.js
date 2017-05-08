/**
 * Created by calebykim on 5/7/17.
 */
var faker = require('faker');
console.log(faker.date.between('2017-01-01', '2017-05-07'))
var mysql  = require('mysql');

var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'bank_db'
});

recur(0, 191817653410033); //bart checking
recur(0, 308511982982083); //bart savings
recur(0, 296418390621310 ); //maggie checking
recur(0,545257371070699); //maggie savings
recur(0, 112737496656568); //lisa checking
recur(0, 470625158828918); //lisa savings

function recur(i, number){
  console.log(i);
  if(i===100){
    return;
  }
  var q = "SELECT * FROM account WHERE number ="+ number;
  dbconn.query(q, function(error, result){
    if(error){
    }else{
      if(result === 'undefined'){
        console.log(" account not found");
      }else{
        var balance = result[0].balance;
        var amount = faker.random.number({min:-20, max:50});
        var newBalance = balance + amount;
        var purchase =
          {
            type: 'POS',
            amount: amount,
            runningBalance: newBalance,
            accountNumber: number,
            description: "nothing",
            createdAt: faker.date.between('2017-01-01', '2017-05-07')

          };
        if(newBalance>=0){
          var q = "INSERT INTO transaction SET ?";
          dbconn.query(q, purchase, function(error, result){
            if(error){
              console.log(error)
            }else{
              dbconn.query('UPDATE account SET ? WHERE ?', [{ balance: newBalance}, { number: number }], function(error, result){
                if(result){
                  i++;
                  recur(i, number)

                }
              });
            }
          });
        }else{
          i++;
          recur(i, number)
        }
      }

    }

  });
}


// function makeFakePurchase(number){
//    var q = "SELECT * FROM account WHERE number = 411453635965";
//       dbconn.query(q, function(error, result){
//         if(error){
//         }else{
//           if(result === 'undefined'){
//             console.log(" account not found");
//           }else{
//             var balance = result[0].balance;
//             console.log(balance)
//             makePurchase(balance, dbconn)
//           }
//
//         }
//
//       });
//
//
//   return null;
// }
//
//
// function makePurchase(balance, dbconn) {
//   var transactions = [];
//   // var amount = faker.random.number({min:3, max:100});
//   var amount = 10;
//   var newBalance = balance + amount;
//   var purchase =
//     {
//       type: 'WITHDRAWAL',
//       amount: amount,
//       runningBalance: newBalance,
//       accountNumber: 411453635965,
//       description: "nothing",
//       createdAt: faker.date.between('2017-01-01', '2017-05-07')
//
//     };
//
//
//   if(newBalance>=0){
//     var q = "INSERT INTO transaction SET ?";
//     dbconn.query(q, purchase, function(error, result){
//       if(error){
//         console.log(error)
//       }else{
//         dbconn.query('UPDATE account SET ? WHERE ?', [{ balance: newBalance}, { number: 411453635965 }]);
//       }
//     });
//   }
//
// }


