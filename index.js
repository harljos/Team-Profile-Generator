// required neccessary packages
const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const employees = [];

// questions that will ask user for input for manager attributes
const managerQuestions = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is the manager's id?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the manager's office number",
        name: "officeNumber"
    }
];

const employeeQuestion = [
    {
        type: "list",
        message: "What employee would you like to hire?",
        name: "employee",
        choices: ["engineer", "intern", "I am done building my team"]
    }
];

// prempts question for which employee the user would like to add
const employeePromt = () => {
    inquirer.prompt(employeeQuestion)
            .then((data) => {
                if (data.employee === "engineer" || data.employee === "intern") {
                    employeePromt();
                }
                else {
                    console.log(data);
                }
            })
}

// runs when file is initialized
const init = () => {
    inquirer
        .prompt(managerQuestions)
        .then((data) => {
            console.log(data);
        })
        .then(() => {
            employeePromt();
        })    
}

init();