class Employee{
    constructor(name, id, email,){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    getRole(){
        return this.role
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

}
module.exports = Employee;