import express = require('express');
import { getAllCars, createCar, getCar, updateCar, deleteCar } from '../controllers/carController';

const carRouter = express.Router();

carRouter.route('/').get(getAllCars).post(createCar);
carRouter.route('/').get(getCar).delete(deleteCar).patch(updateCar)

export default carRouter