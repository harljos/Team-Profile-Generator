// required neccessary packages
const inquirer = require("inquirer");
const manager = require("./src/return-manager");
const engineer = require("./src/return-engineer");
const intern = require("./src/return-intern");

const employees = [];

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
                if (data.employee === "engineer") {
                    inquirer.prompt(engineer.engineerQuestions).then((data) => {
                       employees.push(engineer.returnEngineer(data));
                       console.log(employees);
                    })
                    .then(() => employeePromt())
                }
                else if (data.employee === "intern") {
                    inquirer.prompt(intern.internQuestions).then((data) => {
                        employees.push(intern.returnIntern(data));
                        console.log(employees);
                     })
                     .then(() => employeePromt())
                }
                else {
                    console.log(data);
                }
            })
}

// runs when file is initialized
const init = () => {
    inquirer
        .prompt(manager.managerQuestions)
        .then((data) => {
            employees.push(manager.returnManager(data));
            // console.log(employees);
        })
        .then(() => {
            employeePromt();
        })    
}

init();