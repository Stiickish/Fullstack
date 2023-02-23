import React, { useState } from "react";
import { Person } from "../components/PeopleViewer";

interface IProps {
  people: Person[];
  setPeople: React.Dispatch<React.SetStateAction<Person[]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    city: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.city) {
      return;
    }
    const newPerson={
      id: people.length+1,
      name:input.name,
      age:input.age,
      city:input.city,
    }
    setPeople([...people,newPerson])
    setInput({
      name: "",
      age: "",
      city: "",
    });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      ></input>

      <input
        type="number"
        placeholder="age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      ></input>

      <input
        type="text"
        placeholder="city"
        className="AddToList-input"
        value={input.city}
        onChange={handleChange}
        name="city"
      ></input>

      <button className="AddToList-btn" onClick={handleClick}>
        Add to List
      </button>
    </div>
  );
};

export default AddToList;