const Engineer = require("../lib/engineer");

// questions that will ask the user for input for engineer attributes
const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is their id?",
        name: "id"
    },
    {
        type: "input",
        message: "What is their email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is their github?",
        name: "github"
    }
]

const returnEngineer = (data) => {
    return new Engineer(data.name, data.id, data.email, data.github);
}

module.exports = {
    engineerQuestions,
    returnEngineer
}