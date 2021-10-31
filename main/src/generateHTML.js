const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");

// MANAGER CARD GENERATE 
function managerCard(manager){
  //html for manager (returns a string of a bootstrap card html for the manager)
  console.log(manager)
  return `<div class="col-sm-12 col-md-6 col-lg-3">
      <div class="card p-4" >
          <img src="../../assets/images/manager.png" class="card-img-top" alt="...">
          <div class="card-body text-center">
              <h2>${manager.managerTitle}</h2>
              <h5>Name:${manager.name}</h5>
              <h5>Id:${manager.id}</h5>
              <h5>Email:${manager.email}</h5>
              <h5>Office PH:${manager.officeNumber}</h5>
          </div>
      </div>
  </div>`
}

// ENGINEER CARD GENERATE
function engineerCard(engineer){
  //html for manager (returns a string of a bootstrap card html for the manager)
  let html = "";
  html +=
  `<div class="col-sm-12 col-md-6 col-lg-3">
      <div class="card p-4" >
          <img src="../../assets/images/engineer.png" class="card-img-top" alt="...">
          <div class="card-body text-center">
              <h2>${engineer.engineerTitle}</h2>
              <h5>Name:${engineer.name}</h5>
              <h5>Id:${engineer.id}</h5>
              <h5>Email:${engineer.email}</h5>
          </div>
      </div>
  </div>`
}

// EMPLOYEE CARD GENERATE
function employeeCard(employee){
  let html = "";
  html +=
  `<div class="col-sm-12 col-md-6 col-lg-3">
      <div class="card p-4" >
          <img src="../../assets/images/employee.png" class="card-img-top" alt="...">
          <div class="card-body text-center">
              <h2>${employee.employeeSection}</h2>
              <h5>Name:${employee.name}</h5>
              <h5>Id:${employee.id}</h5>
              <h5>Email:${employee.email}</h5>
          </div>
      </div>
  </div>`
  //html for manager (returns a string of a bootstrap card html for the manager)
}

// INTERN CARD GENERATE
function internCard(intern){
  let html = "";
  html +=
  `<div class="col-sm-12 col-md-6 col-lg-3">
      <div class="card p-4" >
          <img src="../../assets/images/intern.png" class="card-img-top" alt="...">
          <div class="card-body text-center">
              <h2>${intern.internSection} Intern</h2>
              <h5>Name:${intern.name}</h5>
              <h5>Id:${intern.id}</h5>
              <h5>Email:${intern.email}</h5>
              <h5>School:${intern.school}</h5>
          </div>
      </div>
  </div>`
  //html for manager (returns a string of a bootstrap card html for the manager)

}

function generateHTML(employeeArray, engineerArray, managerArray, internArray){
  //join all html card strings for each employee
  //iterate through employees and send to appropriate function
  //get the card for each employee type 
  //once all employees are dealt with call finalHTML

return `<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Team Profile Generator which utilizes node.js inquirer and jest for testing">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- StylesSheet -->
    <link rel="stylesheet" href="style.css">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">



    <title>Team Profile Generator</title>
</head>

<body>
<!-- navbar -------------------------------------------------------------------------------------------------------------->
  <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
    <div class="container-fluid">
        <a class="navbar-brand fw-bold" href="#project">Team Profiles</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link px-4" href="#Employee">Employee</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-4" href="#Manager">Manager</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-4" href="#Engineer">Engineer</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link px-4" href="#Intern">Intern</a>
                </li>
            </ul>
            </li>
        </div>
    </div>
  </nav>

<!-- Team Profile Cards --------------------------------------------------------------------------------------------------->
  <!-- Manager Section ------------------------------------------------->
  <section id="Managers">
    <div class="container my-5 py-5">
      <div class="row mb-5">
        <div class="col-12">
          <h1 class="fw-bold text-center">Managers</h1>
          <hr>
        </div>
        <div class="row d-flex justify-content-center">
        ${managerArray.map(manager => {
          return managerCard(manager)
        }).join()};
        </div>
      </div>
    </div>
  </section>

  
  <!-- Engineers Section  ---------------------------------------------->
  <section id="engineers">
    <div class="container my-5 py-5">
      <div class="row mb-5">
        <div class="col-12">
          <h1 class="fw-bold text-center">Engineers</h1>
          <hr>
        </div>
        <div class="row d-flex justify-content-center">
        ${engineerArray.map(engineer => {
          return engineerCard(engineer)
        }).join()};
        </div>
      </div>
    </div>
  </section>

  <!-- Employees ------------------------------------------------------->
  <section id="employee">
    <div class="container my-5 py-5">
      <div class="row mb-5">
        <div class="col-12">
          <h1 class="fw-bold text-center">Employees</h1>
          <hr>
        </div>
        <div class="row d-flex justify-content-center">
        ${employeeArray.map(employee => {
          return employeeCard(employee)
        }).join()};
        </div>
      </div>
    </div>
  </section>

  <!-- Interns ------------------------------------------------------->
  <section id="intern">
    <div class="container my-5 py-5">
      <div class="row mb-5">
        <div class="col-12">
          <h1 class="fw-bold text-center">Interns</h1>
          <hr>
        </div>
        <div class="row d-flex justify-content-center">
        ${internArray.map(intern => {
          return internCard(intern)
        }).join()}; 
        </div>
      </div>
    </div>
  </section>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
  crossorigin="anonymous"></script>

  <!-- Navbar Scroll -->
  <script>
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.backgroundColor = "#e9ecef";
    } else {
      document.getElementById("navbar").style.backgroundColor = "transparent";
    }
  }
  </script>

</body>`
}

module.exports = generateHTML;