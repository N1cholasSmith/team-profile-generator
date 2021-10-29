const Employee = require('./employee')

class Manager extends Employee{
    constructor(name, id, email, officeNumber, ...args){
        super(name, id, email)
        this.officeNumber = officeNumber;
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