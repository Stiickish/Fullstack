import express = require("express");
import morgan = require("morgan");
import fs from "fs";
import { Request } from "express";


interface CustomRequest extends Request{
    requestTime?: string;
}

const app = express();
console.log(process.env);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Development mode");
}

app.use(express.json()); //Body parser
app.use(express.static(`${__dirname}/public`));

app.use((req: CustomRequest, res, next) => {
  try {
    req.requestTime = new Date().toISOString();
    next();
  } catch (err) {
    next(err);
  }
})

app.get('/test',(req: CustomRequest,res)=>{
console.log(req.requestTime);
res.send("Hello World")
})


//Part 1 create a home route / 
app.get("/", (req, res) => {
  res.status(200).json({
    status: "succes",
    message: "hello World",
  });
});

//Part 2 with params
app.get("/hello/:name", (req, res) => {
  res.status(200).json({
    status: "succes",
    message: `Hello ${req.params.name}`,
  });
});

//Part 3 with queryes
app.get("/hello", (req, res) => {
  res.status(200).json({
    status: "succes",
    //message: `Hello ${req.query.name}`,
    message: `Hello ${req.query.name} || "world"`,
  });
});

//Part 4 with errors
app.get("/error", (req, res) => {
  try {
    throw new Error("Something went wrong");
    res.status(200).json({
      status: "succes",
      message: "Hello",
    });
  } catch (err: any) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
});

//Part 5 JSON data
app.get("/data", (req, res) => {
  const data = fs.readFileSync("./data.json", "utf-8");
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
});

//Part 6 POST json data

app.post("/", (req, res) => {
  const jsonData = req.body;
  res.status(200).json({
    status: "succes",
    data: jsonData,
  });
});

app.listen(3000, () => {
  console.log(`Server is listening to http://localhost:3000`);
});

