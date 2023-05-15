import { getAllPeople, createPerson, deletePerson, updatePerson , getPerson} from "../controllers/peopleController";
import express = require("express");
import { Logger } from "log4js";
import logger from "../utility/logger";

const personRouter = express.Router();

personRouter.route('/').get(getAllPeople).post(createPerson);
personRouter.route('/:id').delete(deletePerson).patch(updatePerson).get(getPerson);

export default personRouter;
