const runQuery = require("./runQuery");

function viewRole() {
  return runQuery(`SELECT role.title, role.salary,department.name AS department 
  FROM role
  INNER JOIN department ON department.id=role.department_id;`);
}

module.exports = viewRole;
