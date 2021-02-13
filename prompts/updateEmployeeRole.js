const getAvailableEmployees = require("../sql/getAvailableEmployees");
const getAvailableRoles = require("../sql/getAvailableRoles");
const inquirer = require("inquirer");
const updateRole = require("../sql/updateRole");

async function updateEmployeeRole() {
  const availableEmployees = await getAvailableEmployees();
  const availableRoles = await getAvailableRoles();
  const answers = await inquirer.prompt([
    {
      name: "employeeId",
      message: "what employee's role would you like to update?",
      type: "list",
      choices: availableEmployees.map((employee) => ({
        name: `${employee.first_name} ${employee.last_name}`,
        value: employee.id,
      })),
    },
    {
      name: "roleId",
      message: "what employee's role would you like to update?",
      type: "list",
      choices: availableRoles.map((role) => ({
        name: role.title,
        value: role.id,
      })),
    },
  ]);
  await updateRole(answers);
}
module.exports = updateEmployeeRole;
