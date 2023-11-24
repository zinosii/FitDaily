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

// MariaDB 연결
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MariaDB:', err);
    return;
  }
  console.log('Connected to MariaDB');

  // 여기에서 쿼리 실행 등 필요한 작업 수행
  connection.query('SELECT * FROM NewTable', (queryErr, results) => {
    if (queryErr) {
      console.error('Error executing query:', queryErr);
      return;
    }

    // 결과 출력
    console.log('Query results:', results);
  // 연결 종료
  connection.end();
  });
});
