//require Employee class as it is the parent class 

const Employee = require('./employee.js');

//Manager class extends Employee, MANAGER class can include its own properties and behavours
//Manager will have everything from EMPLOYEE + anything inside Manager
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //super class of EMPLOYEE, List same parameters
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;