const Employee = require(`./Employee`);

class Engineer extends Employee {
  constructor(name, role, email, github) {
    super(name, role, email, github);
  }
}

module.exports = Engineer;