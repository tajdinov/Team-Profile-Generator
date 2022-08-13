// This is the parent class! 
// children of this class will be Manager, Engineer and Intern.

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee';
    }
}


module.exports = Employee;