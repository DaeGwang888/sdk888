const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'3.39.30.117',
    port: '3306',
    user:'root',
    password:'Gumdong1!530',
    database:'TODO',
    connectionLimit : 10,
  });

//
// connection.connect(function(err){
//   if(err){
//     console.log('mysql connection error');
//     console.log(err);
//     throw err;
//   }
// });
const promisePool = pool.promise(); 
module.exports = promisePool;

// const connection = {
//     host:'3.39.30.117',
//     port: '3306',
//     user:'root',
//     password:'Gumdong1!530',
//     database:'TODO',
//     connectionLimit : 10,
// };

// module.exports = mysql.createPool(connection);