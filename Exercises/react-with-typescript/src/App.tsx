import React, { useState } from "react";
import "./App.css";
import AddToList from "./components/AddToList";
import List from "./components/List"

export interface Istate{
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people,setPeople] = useState<Istate["people"]>([
    {
      name: "LeBron James",
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age: 36,
      note: "Allergic to staying on the same team"
    }
  ])
 


  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}></List>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
