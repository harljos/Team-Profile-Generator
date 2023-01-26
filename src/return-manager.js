const Manager = require("../lib/manager");

// questions that will ask user for input for manager attributes
const managerQuestions = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the manager's id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the manager's office number",
        name: "officeNumber"
    }
];

const returnManager = (data) => {
    return new Manager(data.name, data.id, data.email, data.officeNumber);
}

module.exports = {
    managerQuestions,
    returnManager
}