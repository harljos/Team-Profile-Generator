const fs = require("fs");

// renders the starter html code
const renderHtml = () => {
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
        </main>
      </body>
    </html>`
}

// writes the html file
const writeHtml = () => {
    fs.writeFile("./dist/team.html", renderHtml(), (err) => {
        if (err) {
            console.log(err);
        }
    })
}

module.exports = {
    writeHtml
}