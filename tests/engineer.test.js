const Engineer = require("../library/engineer");

describe("tests for engineer", () => {
  it("sets github account using constructor argument ", () => {
    const value = "GHusername";
    const newEmp = new Engineer("john", 56, "john@gmail.com", value);
    expect(newEmp.github).toBe(value);
  });

  it("returns `engineer` from getRole() method", () => {
    const value = "Engineer";
    const newEmp = new Engineer("john", 56, "john@gmail.com", "GHusername");
    expect(newEmp.getRole()).toBe(value);
  });

  it("returns engineer's github account from getGithub() method", () => {
    const value = "GHusername";
    const newEmp = new Engineer("john", 56, "john@gmail.com", value);
    expect(newEmp.getGithub()).toBe(value);
  });
});
