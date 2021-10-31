const Employee = require('./employee')

class Manager extends Employee{
    constructor(section, name, id, email, officeNumber, ...args){
        super(section, name, id, email)
        this.officeNumber = officeNumber;
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
        return "Manager"
    }

}
module.exports = Manager;