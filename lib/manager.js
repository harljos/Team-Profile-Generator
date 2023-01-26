const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        if (officeNumber === null) {
            throw new Error("Expected office number to have a value");
        }
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;