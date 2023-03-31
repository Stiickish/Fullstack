import express = require('express');
import logger from '../utility/logger';
import Review from '../models/reviewModel';

type Review = {
  id: string;
  review: string;
  rating: number;
  createdAt: Date;
};

export const getAllReviews = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const queryObj = req.query;
    console.log(queryObj);
    const data = await Review.find(queryObj);
    res.status(200).json({
      status: 'succes',
      results: data.length,
      data: {
        data,
      },
    });
    logger.info('Data succesfully retrieved');
  } catch {
    logger.error("Something went wrong. Can't generate list of reviews");
  }
};

export const createReview = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json({
      status: 'succes',
      data: {
        review: newReview,
      },
    });
    logger.info('You created a new review');
  } catch {
    logger.debug('Something went wrong, could not create a new review');
  }
};

export const getReview = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const review = await Review.findById(req.params.id).populate('reviews');

    res.status(200).json({
      status: 'succes',
      data: review,
    });
    logger.info('Here is the review you requested');
  } catch {
    logger.debug('Something went wrong, could not get specific review');
  }
};

export const updateReview = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      status: 'succes',
      data: review,
    });
    logger.info('You succesfully updated the requested review');
  } catch {
    logger.debug('Something went wrong, could not update the requested review');
  }
};

export const deleteReview = async (
  req: express.Request,
  res: express.Response,
) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'succes',
      data: null,
    });
    logger.info('You deleted the requested review');
  } catch {
    logger.debug('Something went wrong, could not delete requested review');
  }
};
