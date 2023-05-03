import express from 'express';
import { getAllPeople, createPerson, getPerson, updatePerson, deletePerson } from '../controllers/personController';

const peopleRouter = express.Router();

peopleRouter.route('/').get(getAllPeople).post(createPerson);
peopleRouter.route('/').get(getPerson).delete(deletePerson).patch(updatePerson)

export default peopleRouter