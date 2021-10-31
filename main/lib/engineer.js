const Employee = require('./employee')

class Engineer extends Employee{
    constructor(section, name, id, email, github, ...args){
        super(section, name, id, email)
        this.github = github;
        this.role = "Engineer";
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
    getGitHub(){
        return this.github
    }
}
module.exports = Engineer;