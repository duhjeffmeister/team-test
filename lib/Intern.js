// Starts with Employee to extend into Intern role
const Employee = require('./Employee');

class Intern extends Employee {
    // Constructor for Intern after Employee is created
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }

}

module.exports = Intern;