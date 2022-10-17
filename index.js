// Requires
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const htmlGenerator = require(`./src/js/htmlG`);
const cssGenerator = require(`./src/js/cssG`);
const jsGenerator = require(`./src/js/jsG`);


// Obj Constructor
function Employee(nameUser, lastName, role, email, github) {
    this.nameUser = nameUser,
    this.lastName = lastName,
    this.role = role,
    this.email = email,
    this.github = github
};

// Constructor classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Array for save employees
const employees = [];


// Using inquirer to get the user data
userData();
function userData() { 
    console.log(`
    ===============
     Type the info
    ===============
    `);

    return inquirer.prompt([
        {
            type: `input`,
            name: `nameUser`,
            message: `What's your name?`,

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`You have to type a name`);
                }
            }
        },
        {
            type: `rawlist`,
            name: `role`,
            message: `What's your role?`,

            choices: [`Manager`, new inquirer.Separator(),
            `Engineer`, new inquirer.Separator(), `Intern`]
        },
        {
            type: `input`,
            name: `email`,
            message: `What's the E-mail?`,

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`You have to type an E-mail`);
                }
            }
        },
        {
            type: `input`,
            name: `github`,
            message: `What's the GitHub username?`,

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`You have to type a GitHub username`);
                }
            }
        },
        {
            type: `input`,
            name: `officeNumber`,
            message: `If you are a Manager please put your oficce number, If you're not, don't type anything`,
        },
        {
            type: `input`,
            name: `school`,
            message: `If you are a Intern please put your School, If you're not, don't type anything`,
        },
        {
            type: `rawlist`,
            name: `runAgain`,
            message: `Do you want to enter another Employee?`,

            choices: [`Yes`, new inquirer.Separator(),
            `No`]
        },
    ]).then(data => {

        // Creating a new Manager Obj
        if (data.role === `Manager`) {

            const newManager = new Manager(data.nameUser, data.role, data.email, data.github, data.officeNumber )

            employees.push(newManager);

        } else if (data.role === `Engineer`) {
            const newEngineer = new Engineer(data.nameUser, data.role, data.email, data.github,);

            employees.push(newEngineer);

        } else if (data.role === `Intern`) {
            const newIntern = new Intern(data.nameUser, data.role, data.email, data.github, data.school);

            employees.push(newIntern);

        };

     
         if(data.runAgain === `Yes`) {
             userData();
         } else if (data.runAgain === `No`){
             console.log(`Here are your employees`);

            //  console.log(employees);
            //  // Creating the HTML
             fs.writeFile(`./dist/index.html`, htmlGenerator(), err => {
                if (err) throw err;
             });

            //  // Creating the CSS
             fs.writeFile(`./dist/style.css`, cssGenerator(), err => {
                if(err) throw err;
             })
            
             // Creating the JS
             fs.writeFile(`./dist/script.js`, jsGenerator(JSON.stringify(employees)), err => {
                if(err) throw err;
             })
            
             console.log(employees);
         }
    })
 };
