var express = require('express');
var router = express.Router();

const mysql = require('mysql2');

const fs = require('fs');
const yaml = require('js-yaml');
const filePath = '.env.yml';

const fileContents = fs.readFileSync(filePath, 'utf8');
const data = yaml.load(fileContents);

// MariaDB 연결 설정
const connection = mysql.createConnection({
  host: data['host'],
  port: data['port'],
  user: data['user'],
  password: data['password'],
  database: data['database']
});


module.exports = router;

router.get('/', function(req, res, next) {

  //get users data, for check the new register
  connection.query('SELECT * FROM users_data', (queryErr, results) => {
    if (queryErr) {
      console.error('Error executing query:', queryErr);
      return;
    }

  const resultsString = JSON.stringify(results);
  //console.log('Query results:', resultsString);
  
  res.render('main.html',{users:resultsString});
  //connection.end()
  });
  
});
