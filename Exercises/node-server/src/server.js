"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
console.log(process.env.PORT);
