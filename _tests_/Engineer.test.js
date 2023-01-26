const Engineer = require("../src/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email, and github", () => {
            const employee = new Engineer({name: "Joe", id: "1", email: "j@gmail.com", github: "harljos"});

            expect(employee.getName()).toEqual({name: "Joe", id: "1", email: "j@gmail.com", github: "harljos"});
        });
        it("should throw an error if no argument are given", () => {
            const cb = () => new Engineer();

            expect(cb).toThrow();
        });
    });

    describe("getGithub", () => {
        it("should return github from Engineer object", () => {
            const employee = new Engineer({name: "Joe", id: "1", email: "j@gmail.com", github: "harljos"});

            expect(employee.getGithub()).toEqual("harljos");
        });
    });

    describe("getRole", () => {
        it("should return role from Engineer object", () => {
            const employee = new Engineer({name: "Joe", id: "1", email: "j@gmail.com", github: "harljos"});

            expect(employee.getRole).toEqual("Engineer");
        });
    });
});