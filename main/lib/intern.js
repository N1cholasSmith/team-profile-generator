const Employee = require('./employee')

class Intern extends Employee{
    constructor(section, name, id, email, school, ...args){
        super(section, name, id, email)
        this.school = school;
        this.role = "Intern";
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
        return this.role
    }
    getSchool(){
        return this.school
    }


}
module.exports = Intern;