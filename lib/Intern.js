//require Employee class as it is the parent class 

const Employee = require('./employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return 'Intern'
    }
}


module.exports = Intern