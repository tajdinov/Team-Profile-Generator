const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Initalization", () => {
        it("Shold create an object with a name, id, email and school", () => {
            const intern = new Intern("Bob", 1, "bob@email.com", "Adelaide Uni")

            //confirm the new objects has the correct properties
            expect(intern.name).toEqual("Bob");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("bob@email.com");
            expect(intern.school).toEqual("Adelaide Uni");

        });


        //TO BE methods here 
        describe("Can set the school via constructor arguments", () => {
            it("Should return the interns school", () => {
                const schoolValue = "Adelaide Uni"
                const intern = new Intern("Jim", 1, "jim@email.com", schoolValue);
                expect(intern.school).toBe(schoolValue)
            })
        })

        //GET methods here 
        describe("Can get the school from getSchool", () => {
            it("Should reutrn the intern school", () => {
                const testValue = "school";
                const intern = new Intern("Name", 1, "test@email.com", testValue);
                expect(intern.getSchool()).toBe(testValue)
            })
        })


        //getRole here 
        describe("Can get role from getRole", () => {
            it("Should return the role as 'intern' ", () => {
                const testValue = "Intern";
                const intern = new Intern("James", 1, "james@email.com", "Adelaide Uni");
                expect(intern.getRole()).toBe(testValue)
            })
        })
    })
})