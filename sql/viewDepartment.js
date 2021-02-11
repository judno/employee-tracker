const runQuery = require("./runQuery");

function viewDepartment(id) {
  return runQuery(`SELECT * FROM department WHERE id = ${id}`);
}

module.exports = viewDepartment;
