const Employee = require(`./Employee`);

class Intern extends Employee {
  constructor(name, role, email, github, school) {
    super(name, role, email, github);
    this.school = school;
  }
}

module.exports = Intern;