const inquirer = require("inquirer");
const newDepartment = require("./prompts/newDepartment");
const newRole = require("./prompts/newRole");
const newEmployee = require("./prompts/newEmployee");
const getAvailableDepartments = require("./sql/getAvailableDepartments");
const getAvailableRoles = require("./sql/getAvailableRoles");
const getAvailableEmployees = require("./sql/getAvailableEmployees");

const ADD_NEW_DEPARTMENT = "Add New Department";
const ADD_NEW_ROLE = "Add New Role";
const ADD_EMPLOYEE = "Add New Employee";
const VIEW_DEPARTMENTS = "View Departments";
const VIEW_ROLES = "View Roles";
const VIEW_EMPLOYEES = "View Employees";
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
      VIEW_DEPARTMENTS,
      VIEW_ROLES,
      VIEW_EMPLOYEES,
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
    case VIEW_DEPARTMENTS: {
      const departments = await getAvailableDepartments();
      console.table(departments);

      return;
    }
    case VIEW_ROLES: {
      const roles = await getAvailableRoles();
      console.table(roles);

      return;
    }
    case VIEW_EMPLOYEES: {
      const employee = await getAvailableEmployees();
      console.table(employee);

      return;
    }
  }
}
run();
