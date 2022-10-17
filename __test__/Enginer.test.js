// import Engineer file to run test with
const Engineer = require("../lib/Engineer");

// creates an Engineer
test("Creates object", () => {
  const engineer = new Engineer(
    "Liza",
    90,
    "lavahrexes@gmail.com",
    "lizalizard81"
  );

  expect(engineer.github).toEqual(expect.any(String));
});

// getGithub() test
test("Collects the Github username", () => {
  const engineer = new Engineer(
    "Liza",
    90,
    "lavahrexes@gmail.com",
    "lizalizard81"
  );

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

test("Gets role of employee", () => {
  const engineer = new Engineer(
    "Lizza",
    90,
    "lavahrexes@gmail.com",
    "lizalizard81"
  );

  expect(engineer.getRole()).toEqual("Engineer");
});