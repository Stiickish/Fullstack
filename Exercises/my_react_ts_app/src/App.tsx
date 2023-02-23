import { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import PeopleViewer, { Person } from "./components/PeopleViewer";


function InputArea({ onChange, value }) {
  return (
    <input
      type="text"
      placeholder="Enter your name"
      onChange={onChange}
      value={value}
    />
  );
}

function DisplayArea({ value }) {
  return <div>{value}</div>;
}

/* export interface Person{
  person:{
    name:string
    age:number
    city:string
  }[]
}
 */
function App() {
  const [name, setName] = useState("");
  const [people, setPeople] = useState<Person[]>([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const addPerson = (person: Person) => {
    setPeople([...people, person]);
  };

  return (
    <div className="App">
      <div>
        <InputArea onChange={handleNameChange} value={name} />
        <DisplayArea value={name} />
        <PeopleViewer people={people} setPeople={setPeople} />
        <AddToList people={people} setPeople={setPeople} />
      </div>
    </div>
  );
}

export default App;