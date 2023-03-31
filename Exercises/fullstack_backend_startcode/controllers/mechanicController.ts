import express = require('express');
import logger from '../utility/logger';
import Mechanic from '../models/mechanicModel';

type Mechanic = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string
};

export const getAllMechanics = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const queryObj = req.query;
    console.log(queryObj);
    const data = await Mechanic.find(queryObj);
    res.status(200).json({
      status: 'succes',
      results: data.length,
      data: {
        data,
      },
    });
    logger.info('Data succesfully retrieved');
  } catch {
    logger.error("Something went wrong. Can't generate list of mechanics");
  }
};

export const createMechanic = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const newMechanic = await Mechanic.create(req.body);
    res.status(201).json({
      status: 'succes',
      data: {
        mechanic: newMechanic,
      },
    });
    logger.info('You created a new mechanic');
  } catch {
    logger.debug('Something went wrong, could not create a new mechanic');
  }
};

export const getMechanic = async (req: express.Request, res: express.Response) => {
  try {
    const mechanic = await Mechanic.findById(req.params.id);

    res.status(200).json({
      status: 'succes',
      data: mechanic,
    });
    logger.info('Here is the mechanic you requested');
  } catch {
    logger.debug('Something went wrong, could not get specific mechanic');
  }
};

export const updateMechanic = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const mechanic = await Mechanic.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'succes',
      data: mechanic,
    });
    logger.info('You succesfully updated the requested mechanic');
  } catch {
    logger.debug('Something went wrong, could not update the requested mechanic');
  }
};

export const deleteMechanic = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    await Mechanic.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'succes',
      data: null,
    });
    logger.info('You deleted the requested mechanic');
  } catch {
    logger.debug('Something went wrong, could not delete requested mechanic');
  }
};
