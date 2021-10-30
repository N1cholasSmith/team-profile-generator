const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");
const Manager = require("../lib/manager");
const Intern = require("../lib/intern");


const generateHTML = (answers) => {
  `<!doctype html>
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
      <link rel="stylesheet" href="assets/css/styles.css">
  
      <!-- Google Fonts -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap" rel="stylesheet">
  
  
  
      <title>Team Profile Generator</title>
  </head>
  
  <body>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
      <div class="container-fluid">
          <a class="navbar-brand fw-bold" href="#project">Portfolio</a>
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
  
  <!-- Team Profile Cards -->
  <section id="services">
      <div class="container my-5 py-5">
        <div class="row mb-5">
          <div class="col-12">
            <h1 class="fw-bold text-center">Team Profiles</h1>
            <hr>
          </div>
          ${Employee.card}
          <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="card p-4" >
                <img src="/assets/images/employee.jpg" class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h2>Employee</h2>
                  <h3>Name:</h3>
                  <h3>Id:</h3>
                  <h3>Email:</h3>
                </div>
              </div>
            </div>
            ${Engineer.card}
            <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="card p-4" >
                <img src="/assets/images/manager.jpg" class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h2>Manager</h2>
                  <h3></h3>
                  <h3></h3>
                  <h3></h3>
                </div>
              </div>
            </div>
            ${Manager.card}
            <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="card p-4">
                <img src="/assets/images/engineer.jpg" class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h2>Engineer</h2>
                  <h3></h3>
                  <h3></h3>
                  <h3></h3>
                </div>
              </div>
            </div>
            ${Intern.card}
            <div class="col-sm-12 col-md-6 col-lg-3">
              <div class="card p-4" >
                <img src="/assets/images/intern.jpg" class="card-img-top" alt="...">
                <div class="card-body text-center">
                  <h2>Intern</h2>
                  <h3></h3>
                  <h3></h3>
                  <h3></h3>
                </div>
              </div>
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
              document.getElementById("navbar").style.backgroundColor = "white";
            } else {
              document.getElementById("navbar").style.backgroundColor = "transparent";
            }
          }
        </script>
  
  </body>
  </html>`;
}
// Bonus using writeFileAsync as a promise
// const init = () => {
//   promptUser()
//     .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
//     .then(() => console.log('Successfully wrote to index.html'))
//     .catch((err) => console.error(err));
// };

// init();

// just use 