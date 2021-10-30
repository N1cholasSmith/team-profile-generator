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
                "Manager", 
                "Engineer", 
                "Employee", 
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
            message: "Employee Section:",
            name: "employeeSection",
            validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
            },
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
            message: "Engineering Title:",
            name: "engineeringTitle",
            validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
            },
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
            message: "Managerial Title:",
            name: "managerTitle",
            validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
            },
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
            message: "Intern Section:",
            name: "internSection",
            validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
            },
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

function generateHTML(teamArray) {
    //iterate through employees and send to appropriate function
    //get the card for each employee type 
    //once all employees are dealt with call finalHTML
    let html = "";
    html +=
    `
    <section id="Managers">
        <div class="container my-5 py-5">
            <div class="row mb-5">
                <div class="col-12">
                    <h1 class="fw-bold text-center">${Manager.role}</h1>
                    <hr>
                </div>
                    <div class="row">
                    ${managerCard}
                    </div>
                </div>
        
    </section>
    `

} 

// MANAGER CARD GENERATE 
function managerCard(manager){
    //html for manager (returns a string of a bootstrap card html for the manager)

    let html = "";
    html +=
    `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card p-4" >
            <img src="../../assets/images/manager.png" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h2>${answer.addManager.managerTitle}</h2>
                <h5>Name:${answer.addManager.name}</h5>
                <h5>Id:${answer.addManager.id}</h5>
                <h5>Email:${answer.addManager.email}</h5>
                <h5>Office PH:${answer.addManager.officeNumber}</h5>
            </div>
        </div>
    </div>`
    
}

// ENGINEER CARD GENERATE
function engineerCard(engineer){
    //html for manager (returns a string of a bootstrap card html for the manager)
    let html = "";
    html +=
    `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card p-4" >
            <img src="../../assets/images/manager.png" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h2>${answer.addEngineer.engineerTitle}</h2>
                <h5>Name:${answer.addEngineer.name}</h5>
                <h5>Id:${answer.addEngineer.id}</h5>
                <h5>Email:${answer.addEngineer.email}</h5>
            </div>
        </div>
    </div>`
}

// EMPLOYEE CARD GENERATE
function employeeCard(employee){
    let html = "";
    html +=
    `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card p-4" >
            <img src="../../assets/images/manager.png" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h2>${answer.addEmployee.employeeSection}</h2>
                <h5>Name:${answer.addEmployee.name}</h5>
                <h5>Id:${answer.addEmployee.id}</h5>
                <h5>Email:${answer.addEmployee.email}</h5>
                <h5>Office PH:${answer.addEmployee.github}</h5>
            </div>
        </div>
    </div>`
    //html for manager (returns a string of a bootstrap card html for the manager)
}

// INTERN CARD GENERATE
function internCard(intern){
    let html = "";
    html +=
    `<div class="col-sm-12 col-md-6 col-lg-3">
        <div class="card p-4" >
            <img src="../../assets/images/manager.png" class="card-img-top" alt="...">
            <div class="card-body text-center">
                <h2>${answer.addIntern.internSection} Intern</h2>
                <h5>Name:${answer.addIntern.name}</h5>
                <h5>Id:${answer.addIntern.id}</h5>
                <h5>Email:${answer.addIntern.email}</h5>
                <h5>Office PH:${answer.addIntern.github}</h5>
            </div>
        </div>
    </div>`
    //html for manager (returns a string of a bootstrap card html for the manager)

}


   
  
init();

