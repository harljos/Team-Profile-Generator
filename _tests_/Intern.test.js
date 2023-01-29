const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, email, and school", () => {
            const intern = new Intern("Joe", "1", "j@gmail.com", "GT");

            expect(intern).toEqual({name: "Joe", id: "1", email: "j@gmail.com", school: "GT"});
        });

        it("should throw an error if no arguments are given", () => {
            const cb = () => new Intern("", "", "", "");

            expect(cb).toThrow();
        });
    });

    describe("getSchool", () => {
        it("should return the school of the Intern object", () => {
            const intern = new Intern("Joe", "1", "j@gmail.com", "GT");

            expect(intern.getSchool()).toEqual("GT");
        });
    });

    describe("getRole", () => {
        it("should return the intern role", () => {
            const intern = new Intern("Joe", "1", "j@gmail.com", "GT");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
});