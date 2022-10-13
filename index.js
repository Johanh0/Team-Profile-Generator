// Requires
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const htmlGenerator = require(`./src/js/htmlG`);
const cssGenerator = require(`./src/js/cssG`);
const jsGenerator = require(`./src/js/jsG`);

// API JS Generator
// const filesG = require(`./src/js/filesG`);


// Obj Constructor
function Employee(nameUser, lastName, email, github) {
    this.nameUser = nameUser,
    this.LastName = lastName,
    this.email = email,
    this.github = github
};

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
            message: `What's the first name?`,

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`You have to type a name`);
                }
            }
        },
        {
            type: `input`,
            name: `lastName`,
            message: `What's the last name?`,

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`You have to put a last name`);
                }
            }
        },
        {
            type: `input`,
            name: `role`,
            message: `What's your role?`,

            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log(`You have to put a role`);
                }
            }
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
            type: `rawlist`,
            name: `runAgain`,
            message: `Do you want to enter another Employee?`,

            choices: [`Yes`, new inquirer.Separator(),
            `No`]
        },
    ]).then(data => {

        const newEmployee = new Employee(data.nameUser, data.lastName, data.role, data.email, data.github);
     
         employees.push(newEmployee);
     
         if(data.runAgain === `Yes`) {
             userData();
         } else if (data.runAgain === `No`){
             console.log(`Here are your employees`);

            //  // Creating the HTML
            //  fs.writeFile(`./dist/index.html`, htmlGenerator(), err => {
            //     if (err) throw err;
            //  });

            //  // Creating the CSS
            //  fs.writeFile(`./dist/style.css`, cssGenerator(), err => {
            //     if(err) throw err;
            //  })
            
            //  // Creating the JS
            //  fs.writeFile(`./dist/script.js`, jsGenerator(JSON.parse(employees)), err => {
            //     if(err) throw err;
            //  })
            
             console.log(employees);
         }
    })
 };

