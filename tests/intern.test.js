const Intern = require("../library/intern");

describe("intern tests", () => {
  it("sets school name using constructor argument", () => {
    const value = UCDavis;
    const newEmp = new Intern("john", 45, "john@gmail.com", value);
    expect(newEmp.school).toBe(value);
  });

  it("returns `intern` from getRole() method", () => {
    const value = "Intern";
    const newEmp = new Intern("john", 45, "john@gmail.com", "UCDavis");
    expect(newEmp.getRole()).toBe(value);
  });

  it("returns school name from getSchool() method", () => {
    const value = UCDavis;
    const newEmp = new Intern("john", 45, "john@gmail.com", value);
    expect(newEmp.getSchool()).toBe(value);
  });
});
