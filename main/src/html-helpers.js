function generateCard (personData)
return `
<div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3">
            <div class="card p-4" >
              <img src="/assets/images/employee.jpg" class="card-img-top" alt="...">
              <div class="card-body text-center">
                <h2>Employee</h2>
                <h3>${personData.name}</h3>
                <h3>Id:</h3>
                <h3>Email:</h3>
                <h3></h3>
                <p class="card-text text-center">


`