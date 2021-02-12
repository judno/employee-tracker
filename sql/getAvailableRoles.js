const runQuery = require("./runQuery");

function getAvailableRoles() {
  return runQuery(`SELECT * from role`);
}

module.exports = getAvailableRoles;
