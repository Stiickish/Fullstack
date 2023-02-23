import React, { useEffect, useState } from "react";

export type Person = {
  id: number;
  name: string;
  age: number;
  city: string;
};

type PeopleViewerProps = {
  people: Person[];
};

const PeopleViewer = ({people,setPeople}: PeopleViewerProps) => {
  const [peopleList, setPeopleList] = useState<Person[]>([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const response = await fetch("http://localhost:3008/person");
      const data = await response.json();
      setPeopleList(data);
    };

    fetchPeople();
  }, []);

  return (
    <div>
      <h1>People</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {peopleList.map((person) => {
            return (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.city}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PeopleViewer;
