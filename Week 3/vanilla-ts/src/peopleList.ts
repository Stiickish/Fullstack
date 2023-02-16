import {Person} from "./index"
  
  export function renderPeopleList(container: HTMLElement, people: Person[]): void {
    const peopleDivs = people.map(person => {
      const personDiv = document.createElement('div');
      personDiv.classList.add('person');
  
      const nameHeader = document.createElement('h2');
      nameHeader.classList.add('person__name');
      nameHeader.innerText = person.name;
      personDiv.appendChild(nameHeader);
  
      const occupationParagraph = document.createElement('p');
      occupationParagraph.classList.add('person__occupation');
      occupationParagraph.innerText = person.occupation;
      personDiv.appendChild(occupationParagraph);
  
      const ageParagraph = document.createElement('p');
      ageParagraph.classList.add('person__age');
      ageParagraph.innerText = person.age.toString();
      personDiv.appendChild(ageParagraph);
  
      const salaryParagraph = document.createElement('p');
      salaryParagraph.classList.add('person__salary');
      salaryParagraph.innerText = person.private_salary.toString();
      personDiv.appendChild(salaryParagraph);
  
      return personDiv;
    });
  
    container.append(...peopleDivs);
  }

  