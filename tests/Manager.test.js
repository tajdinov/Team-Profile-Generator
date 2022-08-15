const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("Should create an object with a name, id, email and officeNumber", () => {
            const manager = new Manager("Bob", 1, "bob@email.com", 10);

            //confirm the new objects has the correct properties
            expect(manager.name).toEqual("Bob");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("bob@email.com");
            expect(manager.officeNumber).toEqual(10);
        });

        //TO BE methods here 
        describe("Can set the officeNumber via constructor arguments", () => {
            it("Should return the managers officeNumber", () => {
                const officeNumberValue = 10
                const manager = new Manager("Jim", 1, "jim@email.com", officeNumberValue);
                expect(manager.officeNumber).toBe(officeNumberValue)
            })
        })

        //GET methods here 
        describe("Can get office number from getOfficeNumber", () => {
            it("Should return the manager office number", () => {
                const testValue = 1;
                const manager = new Manager("Name", 1, "test@email.com", testValue);
                expect(manager.getOfficeNumber()).toBe(testValue)
            })
        })

        //getRole here
        describe("Can get role from getRole", () => {
            it("Should return the role as 'manager' ", () => {
                const testValue = "Manager";
                const manager = new Manager("James", 1, "james@email.com", 20);
                expect(manager.getRole()).toBe(testValue);
            })
        })
    })
})