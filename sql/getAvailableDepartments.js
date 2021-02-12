const runQuery = require("./runQuery");

function getAvailableDepartments() {
  return runQuery(`SELECT * from department`);
}

module.exports = getAvailableDepartments;
