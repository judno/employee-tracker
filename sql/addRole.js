const runQuery = require("./runQuery");

function addRole({ title, salary, departmentId }) {
  return runQuery(
    `INSERT INTO role (\`title\`,\`salary\`,\`department_id\` ) VALUES ('${title}', ${salary}, ${departmentId})`
  );
}

module.exports = addRole;
