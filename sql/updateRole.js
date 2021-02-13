const runQuery = require("./runQuery");

function updateRole({ employeeId, roleId }) {
  return runQuery(`UPDATE employee
   SET role_id = (${roleId})
  WHERE id = (${employeeId})`);
}
module.exports = updateRole;
