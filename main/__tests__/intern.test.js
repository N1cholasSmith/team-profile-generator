const Intern = require("../lib/intern");

test("Get SECTION of Intern Object",() => {
    let intern = new Intern("Cyber Security", "Alex Brown", "6453251", "alexbrown@gmail.com", "Harvard University")
    expect (intern.getSection()).toBe("Cyber Security")
})
test("Get NAME of Intern Object",() => {
    let intern = new Intern("Cyber Security", "Alex Brown", "6453251", "alexbrown@gmail.com", "Harvard University")
    expect (intern.getName()).toBe("Alex Brown")
})
test("Get ID of Intern Object",() => {
    let intern = new Intern("Cyber Security", "Alex Brown", "6453251", "alexbrown@gmail.com", "Harvard University")
    expect (intern.getId()).toBe("6453251")
})
test("Get EMAIL of Intern Object",() => {
    let intern = new Intern("Cyber Security", "Alex Brown", "6453251", "alexbrown@gmail.com", "Harvard University")
    expect (intern.getEmail()).toBe("alexbrown@gmail.com")
})
test("Get SCHOOL of Intern Object",() => {
    let intern = new Intern("Cyber Security", "Alex Brown", "6453251", "alexbrown@gmail.com", "Harvard University")
    expect (intern.getSchool()).toBe("Harvard University")
})
test("Get ROLE of Intern Object",() => {
    let intern = new Intern("Cyber Security", "Alex Brown", "6453251", "alexbrown@gmail.com", "Harvard University")
    expect (intern.getRole()).toBe("Intern")
})