// Node.js Modules
const inquirer = require('inquirer');
const fs = require('fs');

// Link to Generated Page
const generateHTML = require("./generateHTML");

// Team Profiles
const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");


// Team Member empty arrays
let employeeInfo = [];
let engineerInfo = [];
let managerInfo = [];
let internInfo = [];

function teamMemberBuild(){
    console.log(employeeInfo)
    console.log(engineerInfo)
    console.log(managerInfo)
    console.log(internInfo)

    let html = generateHTML(employeeInfo, engineerInfo, managerInfo, internInfo)
    fs.writeFile("./main/src/generateHTML.js", html, (err) => {
        if (err)
            console.log(err);
        else {
            console.log("File written successfully\n")
        }
    })
};


// INTIAL MANAGER PROMPTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const managerpromts = [
    { 
        type: "input",
        message: "Manager Name:",
        name: "name",
        validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
        },
    {
        type: "input",
        message: "Manager ID:",
        name: "id",
        validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
        },
    { 
        type: "input",
        message: "Manager Email:",
        name: "email",  
        },
    { 
        type: "input",
        message: "Office Number:",
        name: "officeNumber",  
        }, 
];

// APP CHOICES (ADD; EMPLOYEE, ENGINEER, MANAGER OR INTERN)>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function appChoices () {
    inquirer.prompt([
        {
            type: "list",
            name: "team",
            choices: [
                "Employee", 
                "Engineer", 
                "Manager", 
                "Intern",
                "Complete"
                // completed condidtion ________________________________________________________________????????
            ]
        }
    ]).

    then((choices) => {
        // choice = new function
        switch(choices.team){
            case "Employee":
                addEmployee();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Manager":
                addManager();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                teamMemberBuild();
        }

    })
}

// ADD EMPLOYEE()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function addEmployee() {
    console.log("Adding Employee")
    inquirer.prompt([
        {
            type: "input",
            message: "Employee Name:",
            name: "name",
            validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
            },
        {
            type: "input",
            message: "Employee ID:",
            name: "id",
            validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
            },
        {
            type: "input",
            message: "Employee Email",
            name: "email"
        }
    ]).then((employeeAns) => {
        let employee = new Employee(employeeAns.name, employeeAns.id, employeeAns.email);
        employeeInfo.push(employee);
        appChoices();
    });
}

// ADD ENGINEER()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function addEngineer() {
    console.log("Adding Engineer")
    inquirer.prompt([
        {
            type: "input",
            message: "Engineer Name:",
            name: "name",
            validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
            },
        {
            type: "input",
            message: "Engineer ID:",
            name: "id",
            validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
            },
        {
            type: "input",
            message: "Engineer Email",
            name: "email"
            },
        {
            type: "input",
            message: "GitHub Username:",
            name: "github"
        },
    ]).then((engineerAns) => {
        let engineer = new Engineer(engineerAns.name, engineerAns.id, engineerAns.email, engineerAns.github);
        engineerInfo.push(engineer);
        appChoices();
    })
}

// ADD MANAGER()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function addManager() {
    console.log("Adding Manager")
    inquirer.prompt([
        {
            type: "input",
            message: "Manager Name:",
            name: "name",
            validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
            },
        {
            type: "input",
            message: "Manager ID:",
            name: "id",
            validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
            },
        { 
            type: "input",
            message: "Manager Email:",
            name: "email",  
            },
        { 
            type: "input",
            message: "Office Number:",
            name: "officeNumber",  
            }, 
    ]).then((managerAns) => {
        let manager = new Manager (managerAns.name, managerAns.id, managerAns.email, managerAns.officeNumber);
        managerInfo.push(manager);
        appChoices();
    });
}

// ADD INTERN()>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function addIntern() {
    console.log("Adding Intern")
    inquirer.prompt([
        {
            type: "input",
            message: "Intern Name:",
            name: "name",
            validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
            },
        {
            type: "input",
            message: "Intern ID:",
            name: "id",
            validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
            },
        {
            type: "input",
            message: "Intern Email",
            name: "email"
            },
        {
            type: "input",
            message: "Intern School:",
            name: "school"
        },
    ]).then((internAns) => {
        let intern = new Intern(internAns.name, internAns.id, internAns.email, internAns.school);
        internInfo.push(intern);
        appChoices();
    })
}

// INITIAL FUNCTION TO ADD MANAGER>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function init() {
    console.log(`
    ___________________________________________________________________________________________________________

    THE TEAM PROFILE GENERATOR.

    Please input your teams personal information via prompts to dynamically generate Team Member Profile Cards.
    ___________________________________________________________________________________________________________`);

    inquirer.prompt(managerpromts).then((managerAns) => {

        let manager = new Manager (managerAns.name, managerAns.id, managerAns.email, managerAns.officeNumber);
        managerInfo.push(manager);
        appChoices();
    });
}
   
  
init();

