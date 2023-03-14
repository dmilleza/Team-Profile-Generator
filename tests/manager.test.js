const Manager = require("../library/manager");

describe("manager tests", () => {
  it("sets office number using constructor argument", () => {
    const value = 56;
    const newEmp = new Manager("john", 16, "john@gmail.com", value);
    expect(newEmp.officeNumber).toBe(testValue);
  });

  it("returns `manager` from getRole() method", () => {
    const value = "Manager";
    const newEmp = new Manager("john", 17, "john@gmail.com", 100);
    expect(newEmp.getRole()).toBe(value);
  });

  it("returns office number using getOffice() method", () => {
    const value = 10;
    const newEmp = new Manager("john", 14, "john@gmail.com", value);
    expect(newEmp.getOfficeNumber()).toBe(value);
  });
});
