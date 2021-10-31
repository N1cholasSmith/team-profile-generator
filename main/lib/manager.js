const Employee = require('./employee')

class Manager extends Employee{
    constructor(section, name, id, email, officeNumber, ...args){
        super(section, name, id, email)
        this.officeNumber = officeNumber;
        this.role = "Manager";
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
    getOfficeNumber(){
        return this.officeNumber
    }

}
module.exports = Manager;