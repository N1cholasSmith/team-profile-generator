
const Employee = require("../lib/employee");

test("Get Name of Employee Object",() => {
    let employee = new Employee("Nicholas Smith", "8604797","nicholas.smith13@defence.gov.au")
    expect (employee.getName()).toBe("Nicholas Smith")
})

test("Get ID of Employee Object",() => {
    let employee = new Employee("Nicholas Smith", "8604797","nicholas.smith13@defence.gov.au")
    expect (employee.getId()).toBe("8604797")
})

test("Get EMAIL of Employee Object",() => {
    let employee = new Employee("Nicholas Smith", "8604797","nicholas.smith13@defence.gov.au")
    expect (employee.getEmail()).toBe("nicholas.smith13@defence.gov.au")
})

test("Get id of Employee Object",() => {
    let employee = new Employee("Nicholas Smith", "8604797","nicholas.smith13@defence.gov.au")
    expect (employee.getRole()).toBe("Employee")
})

