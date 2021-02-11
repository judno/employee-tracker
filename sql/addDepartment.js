const runQuery = require("./runQuery");

function addDepartment(name) {
  return runQuery(`INSERT INTO department (\`name\`) VALUES ('${name}')`);
}

module.exports = addDepartment;
