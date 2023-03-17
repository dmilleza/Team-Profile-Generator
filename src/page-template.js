const generateTeam = (team) => {
  // creates the manager card
  const generateManager = (manager) => {
    return `
    <div class="card col-8 col-sm-5 col-md-5 col-lg-3 m-2">
    <div class="card-header">
      <h2 class="card-title">${manager.getName()}</h2>
      <h6 class="h-4">${manager.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
        </li>
        <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
       
      </ul>
    </div>
  </div>
        `;
  };

  // creates the engineer card
  const generateEngineer = (engineer) => {
    return `
    <div class="card col-8 col-sm-5 col-md-5 col-lg-3 m-2">
    <div class="card-header">
      <h2 class="card-title">${engineer.getName()}</h2>
      <h6 class="h-4">${engineer.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:${engineer.getEmail()}"
            >${engineer.getEmail()}</a
          >
        </li>
        <li class="list-group-item">
        Github:
          <a
            href="https://github.com/${engineer.getGithub()}"
            target="_blank"
            rel="noopener noreferrer"
            >${engineer.getGithub()}</a
          >
        </li>
      </ul>
    </div>
  </div>
        `;
  };

  // creates the intern card
  const generateIntern = (intern) => {
    return `
    <div class="card col-8 col-sm-5 col-md-5 col-lg-3 m-2">
    <div class="card-header">
      <h2 class="card-title">${intern.getName()}</h2>
      <h6 class="h-4">${intern.getRole()}</h6>
    </div>
    <div class="card-body">
      <ul class="list-group">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">
          Email:
          <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
        </li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>
  </div>
        `;
  };

  const html = [];

  html.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => generateManager(manager))
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => generateEngineer(engineer))
      .join("")
  );
  html.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => generateIntern(intern))
      .join("")
  );

  return html.join("");
};

// export function to generate entire page
module.exports = (team) => {
  return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Team Generator</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />
  </head>
  <body class="bg-info">
    <header class="container-fluid p-5 bg-dark">
        <div class="row">
            <div class="col-12 jumbotron">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </header>
    <main class="container pt-5">
        <div class="row px-2 justify-content-center">
            ${generateTeam(team)}
        </div>
    </main>
  </body>
</html>
    `;
};
