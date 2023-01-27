const fs = require("fs");

// renders the starter html code
const renderHtml = () => {
    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Speed Reader</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css" />
        <title>Team Profile Generator</title>
      </head>
      <body>
        <header>
            <h2 class="align-items-center">My Team</h2>
        </header>
        <main class="container">
        </main>
        <script src="../src/generateHtml.js"></script>
      </body>`
}