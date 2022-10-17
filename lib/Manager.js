const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, role, email, github, officeNumber) {
    super(name, role, email, github);
    this.officeNumber = officeNumber;
  }
}

module.exports = Manager;