import express from 'express';
import { getAllPersons, createPerson, getPerson, updatePerson, deletePerson } from '../controllers/peopleController';

const peopleRouter = express.Router();

peopleRouter.route('/').get(getAllPersons).post(createPerson);
peopleRouter.route('/').get(getPerson).delete(deletePerson).patch(updatePerson)

export default peopleRouter