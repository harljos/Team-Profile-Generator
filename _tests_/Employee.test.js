const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, and email", () => {
            const employee = new Employee("Joe", "1", "j@gmail.com");

            expect(employee).toEqual({name: "Joe", id: "1", email: "j@gmail.com"});
        });

        it("should throw an error if no arguments are provided", () => {
            const cb = () => new Employee();

            expect(cb).toThrow();
        });
    });

    describe("getName", () => {
        it("should return name of Employee object", () =>  {
            const employee = new Employee({name: "Joe", id: "1", email: "j@gmail.com"});

            expect(employee.getName()).toEqual("Joe");
        });
    });

    describe("getId", () => {
        it("should return Id of Employee object", () => {
            const employee = new Employee({name: "Joe", id: "1", email: "j@gmail.com"});

            expect(employee.getId()).toEqual("1");
        });
    });

    describe("getEmail", () => {
        it("should return email of Employee object", () => {
            const employee = new Employee({name: "Joe", id: "1", email: "j@gmail.com"});

            expect(employee.getEmail()).toEqual("j@gmail.com");

        });
    });

    describe("getRole", () => {
        it("should return role of Employee object", () => {
            const employee = new Employee({name: "Joe", id: "1", email: "j@gmail.com"});

            expect(employee.getRole()).toEqual("Employee");
        });
    });
});