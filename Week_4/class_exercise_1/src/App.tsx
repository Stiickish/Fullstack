import { useEffect, useState } from "react";
import "./App.css";

interface InputAreaProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

interface DisplayAreaProps {
  value: string;
}

function InputArea({ onChange, value }: InputAreaProps) {
  return (
    <input
      type="text"
      placeholder="Enter your name"
      onChange={onChange}
      value={value}
    />
  );
}

function DisplayArea({ value }: DisplayAreaProps) {
  return <div>{value}</div>;
}

const PeopleViewer = () => {
  type Person = {
    id: number;
    name: string;
    age: number;
    city: string;
  };
  const [people, setPeople] = useState<Person[]>([]);
  const [newPerson, setNewPerson] = useState<Person>({
    id: 0,
    name: "",
    age: 0,
    city: "",
  });

  useEffect(() => {
    fetch("http://localhost:3008/person")
      .then((response) => response.json())
      .then((json) => setPeople(json));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNewPerson({ ...newPerson, [e.target.id]: e.target.value });
  };

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("http://localhost:3008/person", {
            method: "POST",
            body: JSON.stringify({
              name: newPerson.name,
              age: newPerson.age,
              city: newPerson.city,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));
    setPeople([...people, newPerson]);
  };

  const addPerson = () => {
    const newPerson: Person = {
      id: people.length + 1,
      name: "John Doe",
      age: 30,
      city: "Philadelphia",
    };
    setPeople([...people, newPerson]);
  };

  const removePerson = () => {
    setPeople(people.slice(0, -1));
  };

  const sortAge = () => {
    setPeople([...people].sort((a, b) => a.age - b.age));
  };

  const editPerson = (updatedPerson: Person) => {
    const updatedPeople = people.map((person) => {
      if (person.id === updatedPerson.id) {
        return updatedPerson;
      } else {
        return person;
      }
    });
    setPeople(updatedPeople);
  };

  return (
    <div>
      <h1>People</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="name"
          className="AddToList-input"
          onChange={handleChange}
          id="name"
        ></input>

        <input
          type="number"
          placeholder="age"
          className="AddToList-input"
          onChange={handleChange}
          id="age"
        ></input>

        <input
          type="text"
          placeholder="city"
          className="AddToList-input"
          onChange={handleChange}
          id="city"
        ></input>
        <button type="submit">Click to add a person</button>
      </form>

      <button onClick={addPerson}>click to add new person</button>
      <button onClick={removePerson}>Click to remove person</button>
      <button onClick={sortAge}>Click to sort list after age</button>
      <table>
        <thead>
          {" "}
          <tr>
            {" "}
            <th>Id</th> <th>Name</th> <th>Age</th> <th>City</th>{" "}
          </tr>{" "}
        </thead>
        <tbody>
          {people.map((person) => {
            return (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.city}</td>
                <td><button onClick={() => editPerson({ ...person, name: newPerson.name, age: newPerson.age, city: newPerson.city })}>
                  Edit
                </button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

function App() {
  const [name, setName] = useState<string>("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <div className="App">
      <div>
        <InputArea onChange={handleNameChange} value={name} />
        <DisplayArea value={name} />
        <PeopleViewer />
      </div>
    </div>
  );
}

export default App;
