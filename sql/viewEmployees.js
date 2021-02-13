const runQuery = require("./runQuery");

function viewEmployees() {
  return runQuery(`SELECT employee.first_name,employee.last_name,role.title,role.salary,department.name AS department
  FROM employee
  INNER JOIN role ON role.id=employee.role_id
  INNER JOIN department ON department.id=role.department_id;`);
}

module.exports = viewEmployees;
