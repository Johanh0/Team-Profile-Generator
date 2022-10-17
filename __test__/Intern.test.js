// import Intern file to test
const Intern = require("../lib/Intern");

test("creates the object", () => {
  const intern = new Intern("Sarah", 22, "lavahrexes@gmail.com", "UNCC");

  expect(intern.school).toEqual(expect.any(String));
});

// getSchool() test
test("Gets Intern school", () => {
  const intern = new Intern("Steve", 22, "lavahrexes@gmail.com", "UNCC");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

// getRole() test
test("Gets Intern role", () => {
  const intern = new Intern("Steve", 22, "lavahrexes@gmail.com", "UNCC");

  expect(intern.getRole()).toEqual("Intern");
});