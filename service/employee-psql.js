const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'HRMIS',
  password: 'toor',
  port: 5432,
})
var service = {};

service.getEmployees = function() {
     return new Promise((resolve, reject) => {
         //promise inside
         pool.query('SELECT * from employee', function (error, results, fields) {
          if (error) {
            resolve([]);
            throw error;
          }else{
            console.log(results.rows)
            resolve(results.rows);
          }
        });
       
    })
}


module.exports=service;
