import express = require("express");
import morgan = require("morgan");
import fs from "fs";
import { Request } from "express";
import logger from "./src/utility/logging";

interface CustomRequest extends Request {
  requestTime?: string;
}

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("You are currently in Development Mode");
}

app.use(express.json()); //body parser
app.use(express.static(`${__dirname}/public`));

app.use((req: CustomRequest, res, next) => {
  try {
    req.requestTime = new Date().toISOString();
    next();
  } catch (err) {
    next(err);
  }
});

//GET /people - This route will return a list of people
app.get("/people", (req: CustomRequest, res) => {
  try {
    const data = fs.readFileSync("./people.json", "utf-8");
    console.log(req.requestTime);
    res
      .status(200)
      .header({
        "Content-Type": "application/json",
        "Content-Length": data.length,
      })
      .json({
        status: "succes",
        data: JSON.parse(data),
      });
    logger.info("Data succesfully retrieved")
  } catch {
    logger.error("Something went wrong. Can't generate list of people");
  }
});

//GET /people/:id - This route will return a single person
type Person = {
  id: number;
  name: string;
  age: number;
  city: string;
};

app.get("/people/:id", (req: CustomRequest, res) => {
  try{
  const data: { person: Person[] } = JSON.parse(
    fs.readFileSync("./people.json", "utf-8")
  );
  const id = parseInt(req.params.id);
  const person = data.person.find((p) => p.id === id);

  if (!person) {
    res.status(404).json({
      status: "error",
      message: "Person not found",
    });
    return;
  }
  console.log(req.requestTime);
  res
    .status(200)
    .header({
      "Content-Type": "application/json",
      "Content-Length": JSON.stringify(person).length,
    })
    .json({
      status: "success",
      data: person,
    });
    logger.info("Person succesfully retrieved")
}catch{
  logger.error("No match - Try again")
}
});


//POST /people - This route will create a new person
app.post("/", (req, res) => {
  try{
  const { name, age, city } = req.body;

  // read the data from the JSON file
  let data = JSON.parse(fs.readFileSync("./people.json", "utf-8"));

  //Defining a new person
  const newPerson = { id: data["person"].length + 1, name, age, city };

  // add the new person to the data array
  data["person"].push(newPerson);

  // write the updated data back to the file
  fs.writeFileSync("./people.json", JSON.stringify(data));
  res.status(200).json({
    status: "succes",
    data: newPerson,
  });
  logger.info("You just created a new person! - YAY!")
}catch{
  logger.warn("Not possible to make a POST request")
}
});

//PUT /people/:id - This route will update a person (entire object)
app.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age, city } = req.body;

  // Check if all fields are present in the request body
  if (!name || !age || !city) {
    res.status(400).json({
      status: "error",
      message: "All fields (name, age, and city) are required",
    });
    return;
  }

  // read the data from the JSON file
  const data = JSON.parse(fs.readFileSync("./people.json", "utf-8"));

  // find the person to update by id
  let personToUpdate = data.person.find((person: Person) => person.id === id);

  // update the person if found
  if (personToUpdate) {
    personToUpdate.name = name;
    personToUpdate.age = age;
    personToUpdate.city = city;

    // save the updated data back to the file
    fs.writeFileSync("./people.json", JSON.stringify(data));

    res.status(200).json({
      status: "success",
      data: personToUpdate,
    });
  } else {
    res.status(404).json({
      status: "error",
      message: "Person not found",
    });
  }
});

//PATCH /people/:id - This route will update a person (partial object)
app.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age, city } = req.body;

  // read the data from the JSON file
  const data = JSON.parse(fs.readFileSync("./people.json", "utf-8"));

  // find the person to update by id
  let personToUpdate = data.person.find((person: Person) => person.id === id);

  // update the person if found
  if (personToUpdate) {
    if (name) {
      personToUpdate.name = name;
    }
    if (age) {
      personToUpdate.age = age;
    }
    if (city) {
      personToUpdate.city = city;
    }

    // save the updated data back to the file
    fs.writeFileSync("./people.json", JSON.stringify(data));

    res.status(200).json({
      status: "success",
      data: personToUpdate,
    });
  } else {
    res.status(404).json({
      status: "error",
      message: "Person not found",
    });
  }
});

//DELETE /people/:id - This route will delete a person
app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  // read the data from the JSON file
  let data: { person: Person[] } = JSON.parse(
    fs.readFileSync("./people.json", "utf-8")
  );

  // find the person in the array with the matching ID
  const index = data["person"].findIndex((person) => person.id === id);

  if (index >= 0) {
    // remove 1 person from the index
    data["person"].splice(index, 1);

    // write the updated data back to the file
    fs.writeFileSync("./people.json", JSON.stringify(data));

    res.status(200).json({
      status: "success",
      message: `Person with ID ${id} deleted successfully`,
    });
  } else {
    res.status(404).json({
      status: "error",
      message: `Person with ID ${id} not found`,
    });
  }
});

app.listen(3000, () => {
  console.log(`Server is listening to http://localhost:3000`);
});
