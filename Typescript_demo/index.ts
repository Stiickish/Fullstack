const helloWorld = (name: string) => {
  //console.log(`Hello ${name}`);
  return `Hello from ${name}`;
};

class Person {
  public name: String;
  public age: Number;
  public gender: String;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}
function populate(): Person[] {
    const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emily', 'Frank', 'Grace', 'Henry', 'Isabel', 'Jacob'];
    
    const people: Person[] = [];
    for(let i=0; i<10; i++){
    const name = names[i];
    const age = Math.floor(Math.random() * 50);
    const gender = Math.random() < 0.5 ? 'male' : 'female'
    const person = new Person(name, age, gender);
    people.push(person);
  }
  return people;
}



console.log(helloWorld("world"));
console.log(populate())
document.getElementById("root")!.innerHTML = helloWorld("TypeScript");
document.getElementById("name")!.innerHTML = people
