const Employee = require("../library/employee");

describe("Employee tests", () => {
  it("creates new  Employee object", () => {
    const newEmp = new Employee();
    expect(typeof newEmp).toBe("object");
  });

  it("sets name using constructor argument", () => {
    const name = "john";
    const newEmp = new Employee(name);
    expect(newEmp.name).toBe(name);
  });

  it("sets ID using constructor argument", () => {
    const value = 39;
    const newEmp = new Employee("john", value);
    expect(newEmp.id).toBe(value);
  });

  it("sets email using constructor argument", () => {
    const value = "testemail@gmail.com";
    const newEmp = new Employee("John", 69, value);
    expect(newEmp.email).toBe(value);
  });
  it("gets name using getName() method", () => {
    const name = "john";
    const newEmp = new Employee("john");
    expect(newEmp.getName()).toBe(name);
  });

  it("gets ID using getID() method", () => {
    const value = 29;
    const newEmp = new Employee("john", value);
    expect(newEmp.getID()).toBe(value);
  });

  it("gets email using getEmail() method", () => {
    const value = "testemail@gmail.com";
    const newEmp = new Employee("john", 59, value);
    expect(newEmp.getEmail()).toBe(value);
  });
  it("returns `employee` from getRole() method", () => {
    const value = "Employee";
    const newEmp = new Employee("john", 49, "test@gmail.com");
    expect(newEmp.getRole()).toBe(value);
  });
});
