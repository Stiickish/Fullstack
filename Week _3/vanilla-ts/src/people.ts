import { Person } from "./index.js";
import {persons} from "./data.js";

console.log(persons);


export async function getPeople(): Promise<Person[]> {
  let personList = new Array();
  persons.forEach((e) => {
    let newPerson = new Person(e.name, e.age, e.occupation, e.salary);
    personList.push(newPerson);
  });
  return personList;
}
