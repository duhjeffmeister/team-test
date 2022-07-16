// Starts with Employee to extend into Engineer role
const Employee = require('./Employee');

class Engineer extends Employee {
    // Constructor for Engineer after Employee is created
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }

}

module.exports = Engineer;