export class Person {
  name: string;
  age: number;
  occupation: string;
  private_salary: number;

  public constructor(
    name: string,
    age: number,
    occupation: string,
    private_salary: number = 0
  ) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
    this.private_salary = private_salary;
  }

  introduce(): string {
    return `Hello, my name is ${this.name} and I am a ${this.occupation}. I earn ${this.private_salary}`;
  }

  incrementAge(): void {
    this.age++;
  }

  setSalary(salary: number): void {
    this.private_salary = salary;
  }

  getSalary(): number{
    return this.private_salary
  }
}

const john = new Person("John Smith", 30, "Software Dev");
console.log(john.introduce());
console.log(john.age);
john.incrementAge();
console.log(john.age);
john.setSalary(10000)
console.log(john.getSalary())
console.log(john.introduce())


