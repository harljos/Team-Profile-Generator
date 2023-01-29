const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        if (school === "") {
            throw new Error("Expected school to have a value");
        }
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;