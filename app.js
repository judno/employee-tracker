const viewDepartment = require("./sql/viewDepartment");

async function run() {
  const result = await viewDepartment(3);

  console.log(result);
}

run();
