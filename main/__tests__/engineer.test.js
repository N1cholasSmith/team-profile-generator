const Engineer = require("../lib/engineer");

test("Get NAME of Engineer Object",() => {
    let engineer = new Engineer("Nicholas Smith", "8604797","nicholas.smith13@defence.gov.au")
    expect (engineer.getName()).toBe("Nicholas Smith")
})
test("Get ID of Engineer Object",() => {
    let engineer = new Engineer("Nicholas Smith", "8604797","nicholas.smith13@defence.gov.au")
    expect (engineer.getId()).toBe("8604797")
})
test("Get EMAIL of Engineer Object",() => {
    let engineer = new Engineer("Nicholas Smith", "8604797","nicholas.smith13@defence.gov.au")
    expect (engineer.getEmail()).toBe("nicholas.smith13@defence.gov.au")
})
test("Get GITHUB of Engineer Object",() => {
    let engineer = new Engineer("Nicholas Smith", "8604797","nicholas.smith13@defence.gov.au", "N1cholasSmith")
    expect (engineer.getGitHub()).toBe("N1cholasSmith")
})
test("Get ROLE of Engineer Object",() => {
    let engineer = new Engineer("Nicholas Smith", "8604797","nicholas.smith13@defence.gov.au", "N1cholasSmith")
    expect (engineer.getRole()).toBe("Engineer")
})