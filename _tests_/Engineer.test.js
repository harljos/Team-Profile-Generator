const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email, and github", () => {
            const employee = new Engineer("Joe", "1", "j@gmail.com", "harljos");

            expect(employee).toEqual({name: "Joe", id: "1", email: "j@gmail.com", github: "harljos"});
        });
        it("should throw an error if no arguments are given", () => {
            const cb = () => new Engineer("", "", "", "");

            expect(cb).toThrow();
        });
    });

    describe("getGithub", () => {
        it("should return github from Engineer object", () => {
            const employee = new Engineer("Joe", "1", "j@gmail.com", "harljos");

            expect(employee.getGithub()).toEqual("harljos");
        });
    });

    describe("getRole", () => {
        it("should return role from Engineer object", () => {
            const employee = new Engineer("Joe", "1", "j@gmail.com", "harljos");

            expect(employee.getRole()).toEqual("Engineer");
        });
    });
});