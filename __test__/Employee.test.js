const Employee = require("../lib/Employee");

// Employee class test
test("create the object", () => {
  const employee = new Employee("Dave", 67, "lavahrexes@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// getName() test
test("gets the name of the employee", () => {
  const employee = new Employee("Dave", 67, "lavahrexes@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

// getId() test
test("gets the id of the employee", () => {
  const employee = new Employee("Dave", 67, "lavahrexes@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

// getEmail test
test("gets the email of the employee", () => {
  const employee = new Employee("Dave", 67, "lavahrexes@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// getRole() test
test("gets the role of the employee", () => {
  const employee = new Employee("Dave", 67, "lavahrexes@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});