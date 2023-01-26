class Employee {
    constructor(name, id, email) {
        if (name === null || id === null || email === null) {
            throw new Error("Expected name, id, and email to have a value");
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;