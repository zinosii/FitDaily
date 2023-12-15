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

/* GET home page. */
router.get('/', function(req, res, next) {
  //get users data, for check the new register
  connection.query('SELECT * FROM users', (queryErr, results) => {
    if (queryErr) {
      console.error('Error executing query:', queryErr);
      return;
    }
  
  const resultsString = JSON.stringify(results);
  
  res.render('index.html',{users:resultsString});
  //connection.end()
  });
  
});

router.get('/getData', function(req, res, next) {
  //get users data, for check the new register
  connection.query('SELECT * FROM users_data', (queryErr, results) => {
    if (queryErr) {
      console.error('Error executing query:', queryErr);
      return;
    }
  
  const resultsString = JSON.stringify(results);
  
  res.json(resultsString);
  //connection.end()
  });
  
});


router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post('/', (req, res) => {
  const getIdQuery = 'SELECT MAX(id) AS maxId FROM users'
  
  
  connection.query(getIdQuery, (error, results, fields) => {
    if (error) throw error;


    const id = results[0].maxId + 1;
    const username = req.body.username; 
    const email = req.body.email; 
    const password = req.body.password; 
    const created_at = new Date();
    console.log(id,username,email,password,created_at)

    const dataToInsert = { id: id, username: username, email: email, password: password, created_at: created_at };
    const user_query = 'INSERT INTO users SET ?';
    
    connection.query(user_query, dataToInsert, (error, results, fields) => {
        if (error) throw error;
        console.log('데이터가 성공적으로 삽입되었습니다.');
        const values = Array.from({ length: 1 }, (_, index) => id + index);
        const userdata_query = `INSERT INTO users_data (id) VALUES (${values.join(', ')})`;
        connection.query(userdata_query, (error, results, fields) => {
            if(error){
              console.log(error)
            }
            console.log('데이터가 성공적으로 삽입되었습니다.');
        });
    });

    



    res.send('데이터가 성공적으로 전송되었습니다.');

    });

  

});

router.post('/main', (req, res) => {
  const userindex = req.body.userindex; 
  const date = req.body.date; 
  const contents = req.body.contents; 

  const UpdateQuery = 'UPDATE users_data SET ?? = ? WHERE id = ?';
  const queryParams = [date, contents, userindex];

  connection.query(UpdateQuery, queryParams, (error, results, fields) => {
    if (error) {
      
      return;
    }

    console.log('데이터가 성공적으로 삽입되었습니다.');
    res.send('데이터가 성공적으로 전송되었습니다.');
  });

  

});
