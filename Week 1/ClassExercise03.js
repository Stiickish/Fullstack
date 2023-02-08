class Employee {
  constructor(name, salary, hireDate) {
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate;
  }
  toString() {
    return `Employee: ${this.name}}, Salary: ${this.salary}, Hire Date: ${this.hireDate}`;
  }
}

class Manager extends Employee {
  constructor(
    name,
    salary,
    hireDate,
    jobTitle,
    descriptionOfJob,
    employeesManaged
  ) {
    super(name, salary, hireDate);
    this.jobTitle = jobTitle;
    this.descriptionOfJob = descriptionOfJob;
    this.employeesManaged = employeesManaged;
  }
  toString() {
    return `${super.toString()}, Job Title: ${
      this.jobTitle
    }, Description of Job: ${this.descriptionOfJob},Employees Managed: ${
      this.employeesManaged
    }}`;
  }
}

class Department extends Manager {
  constructor(
    name,
    salary,
    hireDate,
    jobTitle,
    descriptionOfJob,
    employeesManaged,
    departmentName,
    employees
  ) {
    super(name, salary, hireDate, jobTitle, descriptionOfJob, employeesManaged);
    this.departmentName = departmentName;
    this.employees = employees;
  }
  toString() {
    return `${super.toString()}, Department Name: ${
      this.departmentName
    }, Employees: ${this.employees}`;
  }
}
class Contract extends Department {
  constructor(
    name,
    salary,
    hireDate,
    jobTitle,
    descriptionOfJob,
    employeesManaged,
    departmentName,
    employees
  ) {
    super(
      name,
      salary,
      hireDate,
      jobTitle,
      descriptionOfJob,
      employeesManaged,
      departmentName,
      employees
    );
    this.name = name;
    this.salary = salary;
    this.hireDate = hireDate;
    this.jobTitle = jobTitle;
    this.descriptionOfJob = descriptionOfJob;
    this.employeesManaged = employeesManaged;
    this.departmentName = departmentName;
    this.employees = employees;
  }
  toString() {
    return super.toString();
  }
}

const contract = new Contract(
  "Bob",
  1000,
  "1 / 1 / 2015",
  "Sales manager",
  "Manager of sales",
  2,
  "Sales department",
  "Steve,Marc"
);

console.log(contract);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const employee = new Employee("Steve Taylor", 5000, "01/01/2015");

for (const element in numbers) {
  console.log(element);
}

for (const prop in employee) {
  console.log(`employee.${prop}=${employee[prop]}`);
}

const num1 = 5;

const calculator = (num1, ...num2) => num1 + num2;
console.log(calculator(5, 6));

function sum(...values) {
  let result = 0;
  for (let value of values) {
    result += value;
  }
  return result;
}

console.log(sum(1, 2, 3));
// Expected output: 6

console.log(sum(1, 2, 3, 4));
// Expected output: 10

const manager = new Manager(
  "Jamens",
  1000,
  "01/01/2015",
  "Manager",
  "Manager of sales",
  2
);

console.log(manager.descriptionOfJob);
console.log(manager.jobTitle);
