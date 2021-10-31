class Employee{
    constructor(section, name, id, email,){
        this.section = section;
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    getSection(){
        return this.section
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