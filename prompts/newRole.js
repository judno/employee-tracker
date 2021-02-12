const getAvailableDepartments = require("../sql/getAvailableDepartments");
const inquirer = require("inquirer");
const addRole = require("../sql/addRole");

async function newRole() {
  const availableDepartments = await getAvailableDepartments();

  const answers = await inquirer.prompt([
    {
      name: "title",
      message: "what is the title of your new role?",
      type: "input",
    },
    {
      name: "salary",
      message: "Enter the salary for this role",
      type: "input",
    },
    {
      name: "departmentId",
      message: "what department does this role belong to?",
      type: "list",
      choices: availableDepartments.map((department) => ({
        name: department.name,
        value: department.id,
      })),
    },
  ]);

  await addRole(answers);
}

module.exports = newRole;
