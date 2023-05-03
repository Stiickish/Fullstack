import express from 'express';
//import logger from '../utility/logger';
import Address from '../models/addressModel';


export const getAllAddresses = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const queryObj = req.query;
    const data = await Address.find(queryObj);
    res.status(200).json({
      status: 'succes',
      results: data.length,
      data: {
        data,
      },
    });
    //logger.info('Data succesfully retrieved');
  } catch {
    //logger.error("Something went wrong. Can't generate list of addresses");
  }
};

export const createAddress = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const newAddress = await Address.create(req.body);
    res.status(201).json({
      status: 'succes',
      data: {
        address: newAddress,
      },
    });
    //logger.info('You created a new Address');
  } catch {
    //logger.debug('Something went wrong, could not create a new address');
  }
};


export const getAddress = async (req: express.Request, res: express.Response) => {
  try {
    const address = await Address.findById(req.params.id).populate('reviews')

    res.status(200).json({
      status: 'succes',
      data: address,
    });
    //logger.info('Here is the address you requested');
  } catch {
   //logger.debug('Something went wrong, could not get specific address');
  }
};

export const updateAddress = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const address = await Address.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'succes',
      data: address,
    });
    //logger.info('You succesfully updated the requested address');
  } catch {
    //logger.debug('Something went wrong, could not update the requested address');
  }
};

export const deleteAddress = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    await Address.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'succes',
      data: null,
    });
    //logger.info('You deleted the requested address');
  } catch {
    //logger.debug('Something went wrong, could not delete requested address');
  }
};
