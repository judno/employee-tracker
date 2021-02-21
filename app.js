const inquirer = require("inquirer");
const newDepartment = require("./prompts/newDepartment");
const newRole = require("./prompts/newRole");
const newEmployee = require("./prompts/newEmployee");
const getAvailableDepartments = require("./sql/getAvailableDepartments");
const getAvailableRoles = require("./sql/getAvailableRoles");
const updateEmployeeRole = require("./prompts/updateEmployeeRole");
const viewEmployees = require("./sql/viewEmployees");
const viewRole = require("./sql/viewRole");

const ADD_NEW_DEPARTMENT = "Add New Department";
const ADD_NEW_ROLE = "Add New Role";
const ADD_EMPLOYEE = "Add New Employee";
const VIEW_DEPARTMENTS = "View Departments";
const VIEW_ROLES = "View Roles";
const VIEW_EMPLOYEES = "View Employees";
const UPDATE_EMPLOYEE = "Update Employee Role";

async function runAction() {
  const { action } = await inquirer.prompt({
    name: "action",
    message: "what would you like to do?",
    type: "list",
    choices: [
      ADD_NEW_DEPARTMENT,
      ADD_NEW_ROLE,
      ADD_EMPLOYEE,
      VIEW_DEPARTMENTS,
      VIEW_ROLES,
      VIEW_EMPLOYEES,
      UPDATE_EMPLOYEE,
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
      const roles = await viewRole();
      console.table(roles);

      return;
    }
    case VIEW_EMPLOYEES: {
      const employees = await viewEmployees();
      console.table(employees);

      return;
    }
    case UPDATE_EMPLOYEE: {
      await updateEmployeeRole();
      return;
    }
  }
}

async function run() {
  let runAgain = true;

  while (runAgain) {
    await runAction();

    const answers = await inquirer.prompt({
      name: "runAgain",
      message: "would you like to perform another action?",
      type: "confirm",
    });

    runAgain = answers.runAgain;
  }
}

run();
