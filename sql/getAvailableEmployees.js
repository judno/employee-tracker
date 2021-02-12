const runQuery = require("./runQuery");

function getAvailableEmployee() {
  return runQuery(`SELECT * from employee`);
}

module.exports = getAvailableEmployee;
