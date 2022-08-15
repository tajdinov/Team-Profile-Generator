const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("Initalizatoin", () => {
        it("Should create an object with a name, id, email and gitHubUsername", () => {
            const engineer = new Engineer("Bob", 1, "bob@email.com", "testGitUserName");

            //confirm the new objects has the correct properties
            expect(engineer.name).toEqual("Bob");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("bob@email.com");
            expect(engineer.gitHub).toEqual("testGitUserName");
        });

        //TO BE methods here 

        describe("Can set the gitHubUserName via constructor arguments", () => {
            it("Should return the engineers gitHub username", () => {
                const gitHubValue = "testGitUserName"
                const engineer = new Engineer("Jim", 1, "jim@email.com", gitHubValue);
                expect(engineer.gitHub).toBe(gitHubValue)
            })
        })

        //GET methods here 
        describe("Can get the git hub user name from getGitHub", () => {
            it("Should reutrn the engineers gitHub username", () => {
                const testValue = "gituser";
                const engineer = new Engineer("Name", 1, "test@email.com", testValue);
                expect(engineer.getGitHub()).toBe(testValue)
            })
        })

        //getRole here 
        describe("Can get role from getRole", () => {
            it("Should return the role as 'engineer' ", () => {
                const testValue = "Engineer";
                const engineer = new Engineer("James", 1, "james@email.com", "testGitUserName");
                expect(engineer.getRole()).toBe(testValue)
            })
        })

    })
})