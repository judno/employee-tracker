const inquirer = require("inquirer");
const addDepartment = require("../sql/addDepartment");

async function newDepartment() {
  const { departmentName } = await inquirer.prompt({
    name: "departmentName",
    message: "what would you like to name the department?",
    type: "input",
  });

  await addDepartment(departmentName);
}

module.exports = newDepartment;
