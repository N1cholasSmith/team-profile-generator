const Manager = require("../lib/manager");

test("Get SECTION of Manager Object",() => {
    let manager = new Manager("Head Manager", "Nicholas Smith", "8604797", "nicholassmith@gmail.com", "0474 444 144")
    expect (manager.getSection()).toBe("Head Manager")
})
test("Get NAME of Manager Object",() => {
    let manager = new Manager("Head Manager", "Nicholas Smith", "8604797", "nicholassmith@gmail.com", "0474 444 144")
    expect (manager.getName()).toBe("Nicholas Smith")
})
test("Get ID of Manager Object",() => {
    let manager = new Manager("Head Manager", "Nicholas Smith", "8604797", "nicholassmith@gmail.com", "0474 444 144")
    expect (manager.getId()).toBe("8604797")
})
test("Get EMAIL of Manager Object",() => {
    let manager = new Manager("Head Manager", "Nicholas Smith", "8604797", "nicholassmith@gmail.com", "0474 444 144")
    expect (manager.getEmail()).toBe("nicholassmith@gmail.com")
})
test("Get OFFICE PHONE NUMBER of Manager Object",() => {
    let manager = new Manager("Head Manager", "Nicholas Smith", "8604797", "nicholassmith@gmail.com", "0474 444 144")
    expect (manager.getOfficeNumber()).toBe("0474 444 144")
})
test("Get ROLE of Manager Object",() => {
    let manager = new Manager("Head Manager", "Nicholas Smith", "8604797", "nicholassmith@gmail.com", "0474 444 144")
    expect (manager.getRole()).toBe("Manager")
})