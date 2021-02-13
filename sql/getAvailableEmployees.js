const runQuery = require("./runQuery");

function getAvailableEmployee() {
  return runQuery(`SELECT * FROM employee`);
}

module.exports = getAvailableEmployee;
