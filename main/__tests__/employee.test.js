
const Employee = require("../lib/employee");

test("Get SECTION of Employee Object",() => {
    let intern = new Employee("Front-End Dev", "Ruby Fields", "9765231", "rubyfields@gmail.com")
    expect (intern.getSection()).toBe("Front-End Dev")
})

test("Get NAME of Employee Object",() => {
    let employee = new Employee("Front-End Dev", "Ruby Fields", "9765231", "rubyfields@gmail.com")
    expect (employee.getName()).toBe("Ruby Fields")
})

test("Get ID of Employee Object",() => {
    let employee = new Employee("Front-End Dev", "Ruby Fields", "9765231", "rubyfields@gmail.com")
    expect (employee.getId()).toBe("9765231")
})

test("Get EMAIL of Employee Object",() => {
    let employee = new Employee("Front-End Dev", "Ruby Fields", "9765231", "rubyfields@gmail.com")
    expect (employee.getEmail()).toBe("rubyfields@gmail.com")
})

test("Get ROLE of Employee Object",() => {
    let employee = new Employee("Front-End Dev", "Ruby Fields", "9765231", "rubyfields@gmail.com")
    expect (employee.getRole()).toBe("Employee")
})

