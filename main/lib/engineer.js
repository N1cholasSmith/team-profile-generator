const Employee = require('./employee')

class Engineer extends Employee{
    constructor(section, name, id, email, github, ...args){
        super(section, name, id, email)
        this.github = github;
    }
    getSection(){
        return this.section
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Engineer";
    }
    getGitHub(){
        return this.github
    }
}
module.exports = Engineer;