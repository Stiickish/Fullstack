import express from 'express';
//import logger from '../utility/logger';
import personModel from '../models/personModel';

export const getAllPeople = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const data = await personModel.find();
    res.status(200).json({
      status: 'succes',
      results: data.length,
      data: {
        data,
      },
    });
    //logger.info('Data succesfully retrieved');
  } catch {
    //logger.error("Something went wrong. Can't generate list of people");
  }
};

export const createPerson = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const newPerson = await personModel.create(req.body);
    res.status(201).json({
      status: 'succes',
      data: {
        person: newPerson,
      },
    });
    //logger.info('You created a new person');
  } catch {
    //logger.debug('Something went wrong, could not create a new person');
  }
};

export const getPerson = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const person = await personModel.findById(req.params.id);

    res.status(200).json({
      status: 'succes',
      data: person,
    });
    //logger.info('Here is the person you requested');
  } catch {
    //logger.debug('Something went wrong, could not get specific person');
  }
};

export const updatePerson = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const person = await personModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );
    res.status(200).json({
      status: 'succes',
      data: person,
    });
    //logger.info('You succesfully updated the requested person');
  } catch {
    //logger.debug('Something went wrong, could not update the requested person');
  }
};

export const deletePerson = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    await personModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'succes',
      data: null,
    });
    //logger.info('You deleted the requested person');
  } catch {
    //logger.debug('Something went wrong, could not delete requested person');
  }
};
