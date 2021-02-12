const inquirer = require("inquirer");
const getAvailableRoles = require("../sql/getAvailableRoles");
const addEmployee = require("../sql/addEmployee");
const getAvailableEmployee = require("../sql/getAvailableEmployees");

async function newEmployee() {
  const availableRoles = await getAvailableRoles();
  const availableEmployees = await getAvailableEmployee();
  const answers = await inquirer.prompt([
    {
      name: "firstname",
      message: "Enter employee's First Name",
      type: "input",
    },
    {
      name: "lastname",
      message: "Enter employee's Last Name",
      type: "input",
    },
    {
      name: "role",
      message: "what is the employee's role?",
      type: "list",
      choices: availableRoles.map((role) => ({
        name: role.title,
        value: role.id,
      })),
    },
    {
      name: "manager",
      message: "add a manager?",
      type: "list",
      choices: [
        ...availableEmployees.map((employee) => ({
          name: `${employee.first_name} ${employee.last_name}`,
          value: employee.id,
        })),
        {
          name: "no manager",
          value: "null",
        },
      ],
    },
  ]);

  await addEmployee(answers);
}
module.exports = newEmployee;

//{
//  name: "salary",
//  message: "Enter employee's salary",
//  type: "input",
//},
//{
//  name: "title",
//  message: "what is the employee's role?",
//  type: "list",
//  choices:
//},
//{
//  name: "deparment",
// message: "select the employees department",
// type: "list",
// options: "[]",
//,
