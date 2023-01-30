const fs = require("fs");

// renders the whole html file
const renderHtml = (employees) => {
  writeHtml();
  renderCards(employees);
}


// renders the starter html code
const renderStartHtml = () => {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css" />
      </head>
      <body>
        <header class="d-flex justify-content-center align-items-center">
            <h2>My Team</h2>
        </header>
        <main class="container">
        `
}

// renders cards to html
const renderCards = (employees) => {
  for (let i = 0; i < employees.length; i++) {
    appendHtml(generateCard(employees[i]));
    if (i === employees.length - 1) {
      renderEndHtml();
    }
  }
}

// render end of html
const renderEndHtml = () => {
  appendHtml(makeEndHtml());
}

// appends the end of html
const makeEndHtml = () => {
  return `
      </main>
    </body>
  </html>`
}

// generates a card based off role
const generateCard = (employee) => {
  switch (employee.getRole()) {
    case "Engineer":
      return `
          <div class="card" style="width:18rem">
            <div class="card-header bg-primary">
              <h1>${employee.getName()}</h1>
              <h1>${employee.getRole()}</h1>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item"><a href="mailto:${employee.getEmail()}">Email: ${employee.getEmail()}</a></li>
                <li class="list-group-item"><a href="https://github.com/${employee.getGithub()}">Github: ${employee.getGithub()}</a></li>
              </ul>
            </div>
          </div>
      `
    case "Intern":
      return `
          <div class="card" style="width:18rem">
            <div class="card-header bg-primary">
              <h1>${employee.getName()}</h1>
              <h1>${employee.getRole()}</h1>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item"><a href="mailto:${employee.getEmail()}">Email: ${employee.getEmail()}</a></li>
                <li class="list-group-item">School: ${employee.getSchool()}</li>
              </ul>
            </div>
          </div>
      ` 
    case "Manager":
      return `
          <div class="card" style="width:18rem">
            <div class="card-header bg-primary">
              <h1>${employee.getName()}</h1>
              <h1>${employee.getRole()}</h1>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item"><a href="mailto:${employee.getEmail()}">Email: ${employee.getEmail()}</a></li>
                <li class="list-group-item">Office Number: ${employee.getOfficeNumber()}</li>
              </ul>
            </div>
          </div>
      `
  }
}

// writes the html file
const writeHtml = () => {
    fs.writeFile("./dist/team.html", renderStartHtml(), (err) => {
      if (err) {
          console.log(err);
      }
    })
}

// writes cards to html
const appendHtml = (data) => {
  fs.appendFile("./dist/team.html", data, (err) => {
    if (err) {
      console.log(err);
  }
  })
} 

module.exports = {renderHtml}