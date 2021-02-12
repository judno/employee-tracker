const inquirer = require("inquirer");
const newDepartment = require("./prompts/newDepartment");
const newRole = require("./prompts/newRole");
const newEmployee = require("./prompts/newEmployee");

const ADD_NEW_DEPARTMENT = "Add New Department";
const ADD_NEW_ROLE = "Add New Role";
const ADD_EMPLOYEE = "Add New Employee";

//Add departments, roles, employees
//view departments, roles, employees
// Update employee roles
async function run() {
  const { action } = await inquirer.prompt({
    name: "action",
    message: "what would you like to do?",
    type: "list",
    choices: [
      //create
      ADD_NEW_DEPARTMENT,
      ADD_NEW_ROLE,
      ADD_EMPLOYEE,
      "Veiw Departments",
      "Veiw Roles",
      "Veiw Employees",
      "Update Employee Role",
    ],
  });

  switch (action) {
    case ADD_NEW_DEPARTMENT: {
      // inquire about new department
      await newDepartment();

      return;
    }
    case ADD_NEW_ROLE: {
      await newRole();

      return;
    }
    case ADD_EMPLOYEE: {
      await newEmployee();

      return;
    }
  }
}
run();
