import express = require("express");
import morgan = require('morgan');
import carRouter from "./routes/carRouter"

const app = express();
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  console.log("Development mode...");
}

app.use(express.json()); // Body parser for JSON data
app.use(express.static(`${__dirname}/public`)); // Serve static files

app.use('/api/v1/cars',carRouter)

export default app;
