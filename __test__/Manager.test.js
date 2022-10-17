
// import Manger file to run tests
const Manager = require("../lib/Manager");

// creates the Manager test
test("creates the object", () => {
  const manager = new Manager("Bobby", 8, "lavahrexes@gmail.com", 1);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// getRole() tests
test("Gets role of Manager", () => {
  const manager = new Manager("Bobby", 8, "lavahrexes@gmail.com");

  expect(manager.getRole()).toEqual("Manager");
});