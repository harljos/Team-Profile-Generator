const Intern = require("../lib/intern");

// questions that will ask the user for input for intern attributes
const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
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
        message: "What school did they go to?",
        name: "school"
    }
]

const returnIntern = (data) => {
    return new Intern(data.name, data.id, data.email, data.school);
}

module.exports = {
    internQuestions,
    returnIntern
}