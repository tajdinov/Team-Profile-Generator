const Employee = require('../lib/employee');

//test for all use cases when initializing a new employee object 

describe("Employee", () => {
    describe("Initialization", () => {
        it("it should create an object with a name, id and email", () => {
            const employee = new Employee("Bob", 1, "bob@email.com");

            //confirm that new objects has the correct properties
            expect(employee.name).toEqual("Bob");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("bob@email.com");
        });

        //testing that name can be set via constructor arguments
        describe("Can set name via constructor arguments", () => {
            it("should return the employees name", () => {
                const name = "Bob";
                const employee = new Employee(name);
                expect(employee.name).toBe(name);
            })
        });

        //testing id can be set via constructor arguments 
        describe("Can set id via constructor arguments", () => {
            it("Should return the employees id number", () => {
                const idValue = 1;
                const employee = new Employee("James", idValue);
                expect(employee.id).toBe(idValue)
            })
        });

        //testing email can be set via constructor arguments 
        describe("Can set email via constructor arguments", () => {
            it("Should return the employees email", () => {
                const emailValue = "test@test.com";
                const employee = new Employee("James", 1, emailValue);
                expect(employee.email).toBe(emailValue)
            })
        })

        // GET methods HERE:
        describe("Can get name from getName", () => {
            it("Should return the employees name", () => {
                const testValue = "Jim";
                const employee = new Employee(testValue);
                expect(employee.getName()).toBe(testValue)
            });
        })
        describe("Can get id from getId", () => {
            it("Should return the employees id", () => {
                const testValue = 1;
                const employee = new Employee("Name", testValue);
                expect(employee.getId()).toBe(testValue)
            });
        })

        describe("Can get email from getEmail", () => {
            it("Should reutrn the employees email", () => {
                const testValue = "test@email.com";
                const employee = new Employee("Name", 1, testValue);
                expect(employee.getEmail()).toBe(testValue)
            });
        })

        //getRole
        describe("Can get role from getRole", () => {
            it("Should return role as 'employee' ", () => {
                const testValue = "Employee";
                const employee = new Employee("Jim", 1, "test@email.com");
                expect(employee.getRole()).toBe(testValue);
            })
        })

    })
})