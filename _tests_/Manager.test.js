const Manager = require("../lib/manager");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email, and office Number", () => {
            const manager = new Manager("Joe", "1", "j@gmail.com", "1");

            expect(manager).toEqual({name: "Joe", id: "1", email: "j@gmail.com", officeNumber: "1"});
        });

        it("should throw an error if no arguments are given", () => {
            const cb = () => new Manager("", "", "", "");

            expect(cb).toThrow();
        });
    });

    describe("getRole", () => {
        it("should return the manager role", () => {
            const manager = new Manager("Joe", "1", "j@gmail.com", "1");

            expect(manager.getRole()).toEqual("Manager");
        });
    });

    describe("getOfficeNumber", () => {
        it("should return the office number of the manager", () => {
            const manager = new Manager("Joe", "1", "j@gmail.com", "1");

            expect(manager.getOfficeNumber()).toEqual("1");
        });
    });
});