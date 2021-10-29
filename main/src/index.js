const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateHTML = require("");

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
    { 
            type: "confirm",
            message: "would you like to make a profile card?",
            name: "profileCardConfirm",  
        },
      {
        type: "list",
        message: "What title does this person hold",
        choices: [
            {name:"Manager"},
            {name:"Engineer"},
            {name:"Employee"},
            {name:"Intern"},
        ],
        name: "profileRole",
        validate: (value)=>{if (value){return true} else {return "Please enter a value to continue"}},
      },
      { 
        type: "input",
        message: "would you like to make a profile card?",
        name: "profileName",  
    },
    { 
        type: "input",
        message: "would you like to make a profile card?",
        name: "profileId",  
    },
    { 
        type: "input",
        message: "would you like to make a profile card?",
        name: "profileEmail",  
    },
    { 
        type: "input",
        message: "would you like to make a profile card?",
        name: "profileCardConfirm",  
    },

])

.then((response) => {
    return fs.writeFileSync(path.join (process.cwd(), "README.md"), generateMarkdown(response));
});
}




