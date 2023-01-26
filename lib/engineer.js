const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        if (github === null) {
            throw new Error("Expected github to have a value");
        }
        super(name, id, email);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;