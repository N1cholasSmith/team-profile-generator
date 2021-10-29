const Employee = require('./employee')

class Engineer extends Employee{
    constructor(name, id, email, github, ...args){
        super(name, id, email)
        this.github = github;
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