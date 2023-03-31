import express = require('express');
import { getAllReviews, createReview, getReview, updateReview, deleteReview } from '../controllers/reviewController';

const reviewRouter = express.Router();

reviewRouter.route('/').get(getAllReviews).post(createReview);
reviewRouter.route('/').get(getReview).delete(deleteReview).patch(updateReview)

export default reviewRouter