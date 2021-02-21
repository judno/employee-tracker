const mysql = require("mysql");

function runQuery(query) {
  return new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "mysql",
      database: "employee-tracker",
    });

    connection.query(query, (err, result) => {
      connection.end();

      if (err) {
        reject(err);
      }

      resolve(result);
    });
  });
}

module.exports = runQuery;
