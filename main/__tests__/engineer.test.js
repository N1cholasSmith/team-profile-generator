const Engineer = require("../lib/engineer");

test("Get SECTION of Engineer Object",() => {
    let engineer = new Engineer("Innovations Engineer", "Steve Shanley", "6458793", "steveshanley@gmail.com", "steveshanley.innovation")
    expect (engineer.getSection()).toBe("Innovations Engineer")
})
test("Get NAME of Engineer Object",() => {
    let engineer = new Engineer("Innovations Engineer", "Steve Shanley", "6458793", "steveshanley@gmail.com", "steveshanley.innovation")
    expect (engineer.getName()).toBe("Steve Shanley")
})
test("Get ID of Engineer Object",() => {
    let engineer = new Engineer("Innovations Engineer", "Steve Shanley", "6458793", "steveshanley@gmail.com", "steveshanley.innovation")
    expect (engineer.getId()).toBe("6458793")
})
test("Get EMAIL of Engineer Object",() => {
    let engineer = new Engineer("Innovations Engineer", "Steve Shanley", "6458793", "steveshanley@gmail.com", "steveshanley.innovation")
    expect (engineer.getEmail()).toBe("steveshanley@gmail.com")
})
test("Get GITHUB of Engineer Object",() => {
    let engineer = new Engineer("Innovations Engineer", "Steve Shanley", "6458793", "steveshanley@gmail.com", "steveshanley.innovation")
    expect (engineer.getGitHub()).toBe("steveshanley.innovation")
})
test("Get ROLE of Engineer Object",() => {
    let engineer = new Engineer("Innovations Engineer", "Steve Shanley", "6458793", "steveshanley@gmail.com", "steveshanley.innovation")
    expect (engineer.getRole()).toBe("Engineer")
})