// employee library modules
const Manager = require("./library/manager");
const Engineer = require("./library/engineer");
const Intern = require("./library/intern");

// node modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/page-template");
const path = require("path");

//attaches 'dist' folder to absolute path containing current directory(Team-Profile-Generator)
const DIST_DIR = path.resolve(__dirname, "dist");
//attaches "team.html" to "dist" folder
const distPath = path.join(DIST_DIR, "team.html");

const teamMembers = [];
const idArray = [];

function init() {
  function createManager() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "managerName",
          message: "What is the team manager's name?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter at least one character.";
          },
        },
        {
          type: "input",
          name: "managerId",
          message: "What is the team manager's id?",
          validate: (answer) => {
            if (answer) {
              return true;
            }
            return "Please enter a number.";
          },
        },
        {
          type: "input",
          name: "managerEmail",
          message: "What is the team manager's email?",
          validate: (answer) => {
            if (answer) {
              return true;
            }
            return "Please enter an email address.";
          },
        },
        {
          type: "input",
          name: "managerOfficeNumber",
          message: "What is the team manager's office number?",
          validate: (answer) => {
            if (answer) {
              return true;
            }
            return "Please enter a number.";
          },
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
      });

    const createTeam = async () => {
      const answers = await inquirer.prompt([
        {
          type: "list",
          message: "Who would you like to add?",
          name: "role",
          choices: ["Engineer", "Intern", "I'm done building my team"],
        },
      ]);

      if (answers.role === "Engineer") {
        const engineerAns = await inquirer.prompt([
          {
            type: "input",
            name: "engineerName",
            message: "What is your engineer's name?",
            validate: (answer) => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            },
          },
          {
            type: "input",
            name: "engineerId",
            message: "What is your engineer's id?",
            validate: (answer) => {
              if (answer) {
                if (idArray.includes(answer)) {
                  return "This ID is already taken. Please enter a different number.";
                } else {
                  return true;
                }
              }
              return "Please enter a number.";
            },
          },
          {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's email?",
            validate: (answer) => {
              if (answer) {
                return true;
              }
              return "Please enter a valid email address.";
            },
          },
          {
            type: "input",
            name: "engineerGithub",
            message: "What is your engineer's GitHub username?",
            validate: (answer) => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            },
          },
        ]);
        const engineer = new Engineer(
          engineerAns.engineerName,
          engineerAns.engineerId,
          engineerAns.engineerEmail,
          engineerAns.engineerGithub
        );
        teamMembers.push(engineer);
        idArray.push(engineerAns.engineerId);
        createTeam();
      } else if (answers.role === "Intern") {
        const internAns = await inquirer.prompt([
          {
            type: "input",
            name: "internName",
            message: "What is your intern's name?",
            validate: (answer) => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            },
          },
          {
            type: "input",
            name: "internId",
            message: "What is your intern's id?",
            validate: (answer) => {
              if (answer) {
                if (idArray.includes(answer)) {
                  return "This ID is already taken. Please enter a different number.";
                } else {
                  return true;
                }
              }
              return "Please enter a number.";
            },
          },
          {
            type: "input",
            name: "internEmail",
            message: "What is your intern's email?",
            validate: (answer) => {
              if (answer) {
                return true;
              }
              return "Please enter a valid email address.";
            },
          },
          {
            type: "input",
            name: "internSchool",
            message: "What is your intern's school?",
            validate: (answer) => {
              if (answer !== "") {
                return true;
              }
              return "Please enter at least one character.";
            },
          },
        ]);
        const intern = new Intern(
          internAns.internName,
          internAns.internId,
          internAns.internEmail,
          internAns.internSchool
        );
        teamMembers.push(intern);
        idArray.push(internAns.internId);
        createTeam();
      } else {
        //if user does not want to add engineer or intern, build the team
        buildTeam();
      }
    };
  }
  createManager();
}

//when "node index.js" is entered, questions are asked
init();

function buildTeam() {
  // if "dist" folder does not exist, create it
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR);
  }
  // if "team.html" file exists, delete it
  if (fs.existsSync(distPath)) {
    fs.rmSync(distPath);
  }
  // creates "team.html" file and attaches it to "dist" folder
  fs.writeFileSync(distPath, generateTeam(teamMembers), "utf-8");
}
