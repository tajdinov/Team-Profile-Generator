const inquirer = require("inquirer");
const fs = require('fs')
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const render = require("./lib/htmlMaker");



const team = []

//function to generate entire team profile
async function teamProfileGenerator() {


    // function to pick initial team member
    function whichMember() {
        inquirer.prompt([{
            type: "list",
            message: "Select Employee Description",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }]).then(data => {
            if (data.role === "Manager") {
                manager();
            } else if (data.role === "Engineer") {
                engineer();
            } else if (data.role === "Intern") {
                intern();
            }
        })
    };

    //function to see if there are more employees
    function moreMembers() {
        inquirer.prompt([{
            type: "list",
            message: "Select Employee Description",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Our team is complete"
            ]
        }]).then(data => {
            if (data.role === "Manger") {
                manager();
            } else if (data.role === "Engineer") {
                engineer();
            } else if (data.role === "Intern") {
                intern();
            } else if (data.role === "Our team is complete") {
                getHTML()
            }
        }).catch(error => {
            return error;
        });


    };


    //function for Manager Questions 
    async function manager() {
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the manager name?"
            },
            {
                type: "number",
                name: "id",
                message: "What is their ID number?"
            },
            {
                type: "input",
                name: 'email',
                message: "What is the managers email?"
            },
            {
                tyle: "number",
                name: "office",
                message: "What is the managers office number?"
            },
        ]).then(managerData => {
            const managerInfo = new Manager(managerData.name, managerData.id, managerData.email, managerData.office);
            team.push(managerInfo);
            moreMembers();

        }).catch(error => {
            console.log(error);
        })
    }


    //function for Engineer Questions
    async function engineer() {
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the engineers name?"
            },
            {
                type: "number",
                name: "id",
                message: "What is the engineers ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the enginners email?"
            },
            {
                type: "input",
                name: "github",
                message: "What is the enginners github username?"
            }
        ]).then(engineerData => {
            const engineerInfo = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);
            team.push(engineerInfo);
            moreMembers();

        }).catch(error => {
            console.log(error);
        })
    }


    //function for Intern Questions 
    async function intern() {
        inquirer.prompt([{
                type: "input",
                name: "name",
                message: "What is the interns name?"
            },
            {
                type: "number",
                name: "id",
                message: "What is the interns ID number?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the interns email?"
            },
            {
                type: "input",
                name: "school",
                message: "What is the interns school?"
            }
        ]).then(internData => {
            const internInfo = new Intern(internData.name, internData.id, internData.email, internData.school);
            team.push(internInfo);
            moreMembers();

        }).catch(error => {
            console.log(error);
        });
    };


    async function startQuestions() {
        whichMember();
    };
    startQuestions();


    // Get object and write to HTML
    async function getHTML() {
        console.log(team)
        const myHTML = render(team);


        fs.writeFileSync('./dist/team.html', myHTML, function(err) {
            if (err) return err;
            console.log("Success! You made a team.html file!")
        });
    };

}

//calls create team profile function 
teamProfileGenerator();