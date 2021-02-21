const runQuery = require("./runQuery");

function viewEmployees() {
  return runQuery(`SELECT e.first_name,e.last_name,role.title,role.salary,department.name AS department, CONCAT(m.first_name, ' ', m.last_name) AS manager 
  FROM employee e
  INNER JOIN role ON role.id=e.role_id
  INNER JOIN department ON department.id=role.department_id
  LEFT JOIN employee m ON m.id=e.manager_id;`);
}

module.exports = viewEmployees;
