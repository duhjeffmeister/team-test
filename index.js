// Imports dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const jest = require('jest');


// Imports constructors
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const DIST_DIR = path.resolve(__dirname, 'dist')
const outputPath = path.join(DIST_DIR, 'index.html');

const render = require('./src/page-template.js');

// Empty arrays for the team and their ids
const teamArr = [];
const idArr = [];


// Starts app
function initApp() {

    // User prompt to create a Manager
    function addManager() {
        console.log("Initialized team builder");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What's the manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the manager's name.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What's the manager's ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid ID.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What's the manager's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Email address can't be empty.";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What's the manager's office phone number? (format: 111111111)",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a correct phone number in the correct format";
                }
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArr.push(manager);
            idArr.push(answers.managerId);
            addTeam();
        });
    }

    // addTeam function after finish with addManager
    function addTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What would you like to add next?",
                choices: [
                    "Engineer",
                    "Intern",
                    "End application"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    generateHTML();
            }
        });
    }

    // add an Engineer when selected
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What's the engineer's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Engineer's name can't be left empty.";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What's the engineer's id?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid Engineer's ID.";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What's the engineer's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Email address can't be empty.";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What's the engineer's GitHub username?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter the engineer's GitHub username.";
                }
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArr.push(engineer);
            idArr.push(answers.engineerId);
            addTeam();
        });
    }

    // Add an Intern when selected
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What's the intern's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What's the intern's id?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a valid Intern's ID.";
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What's the intern's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Email address can't be empty.";
                }
            },
            {
                type: "input",
                name: "internSchool",
                message: "What's the intern's school?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter a correct school.";
                }
            }

        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamArr.push(intern);
            idArr.push(answers.internId);
            addTeam();
        });
    }
    
    // Creates the HTML file after user input is collected
    function generateHTML() {

        // Create dist directory for index.html if it doesn't exist
        if (!fs.existsSync(DIST_DIR)) {
            fs.mkdirSync(DIST_DIR)
        }
        console.log("Generating Team Profile.... ");
        fs.writeFileSync(outputPath, render(teamArr), "utf-8");
    }

    addManager();
}

initApp();