import express = require('express');
import logger from '../utility/logger';
import Person from '../models/peopleModel';

type Person = {
  id: string;
  name: string;
  age: number;
  city: string;
};

export const getAllPersons = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const data = await Person.find();
    res.status(200).json({
      status: 'succes',
      results: data.length,
      data: {
        data,
      },
    });
    logger.info('Data succesfully retrieved');
  } catch {
    logger.error("Something went wrong. Can't generate list of people");
  }
};

export const createPerson = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const newPerson = await Person.create(req.body);
    res.status(201).json({
      status: 'succes',
      data: {
        person: newPerson,
      },
    });
    logger.info('You created a new person');
  } catch {
    logger.debug('Something went wrong, could not create a new person');
  }
};


export const getPerson = async (req: express.Request, res: express.Response) => {
  try {
    const car = await Person.findById(req.params.id);

    res.status(200).json({
      status: 'succes',
      data: car,
    });
    logger.info('Here is the person you requested');
  } catch {
    logger.debug('Something went wrong, could not get specific person');
  }
};

export const updatePerson = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const person = await Person.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'succes',
      data: person,
    });
    logger.info('You succesfully updated the requested person');
  } catch {
    logger.debug('Something went wrong, could not update the requested person');
  }
};

export const deletePerson = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    await Person.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'succes',
      data: null,
    });
    logger.info('You deleted the requested person');
  } catch {
    logger.debug('Something went wrong, could not delete requested person');
  }
};
