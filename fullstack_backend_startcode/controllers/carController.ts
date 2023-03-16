import express = require('express');
import logger from '../utility/logger';
import Car from '../models/carModel';

type Car = {
  id: string;
  model: string;
  year: number;
  price: number;
  color: string;
};

export const getAllCars = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const data = await Car.find();
    res.status(200).json({
      status: 'succes',
      results: data.length,
      data: {
        data,
      },
    });
    logger.info('Data succesfully retrieved');
  } catch {
    logger.error("Something went wrong. Can't generate list of cars");
  }
};

export const createCar = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const newCar = await Car.create(req.body);
    res.status(201).json({
      status: 'succes',
      data: {
        car: newCar,
      },
    });
    logger.info('You created a new car');
  } catch {
    logger.debug('Something went wrong, could not create a new car');
  }
};

/* export const createCar = async (req: express.Request, res: express.Response) => {
    try{
      // const newCar = req.body;
      // carArray.push(jsonData);

      const newCar = await Car.create(req.body);
      res.status(201)
      .json({
          status: "success",
          data: {
            car: newCar,
          }
      })
    } catch(e) {
      const jsonData = req.body;
      res.status(400)
      .json({
          status: "failed",
          data: {
            car: jsonData
          }
      })

  }}; */

export const getCar = async (req: express.Request, res: express.Response) => {
  try {
    const car = await Car.findById(req.params.id);

    res.status(200).json({
      status: 'succes',
      data: car,
    });
    logger.info('Here is the car you requested');
  } catch {
    logger.debug('Something went wrong, could not get specific car');
  }
};

export const updateCar = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'succes',
      data: car,
    });
    logger.info('You succesfully updated the requested car');
  } catch {
    logger.debug('Something went wrong, could not update the requested car');
  }
};

export const deleteCar = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'succes',
      data: null,
    });
    logger.info('You deleted the requested car');
  } catch {
    logger.debug('Something went wrong, could not delete requested car');
  }
};
