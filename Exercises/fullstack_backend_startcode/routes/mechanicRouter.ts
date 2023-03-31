import express = require('express');
import {
  getAllMechanics,
  createMechanic,
  getMechanic,
  updateMechanic,
  deleteMechanic,
} from '../controllers/mechanicController';

const mechanicRouter = express.Router();

mechanicRouter.route('/').get(getAllMechanics).post(createMechanic);
mechanicRouter
  .route('/')
  .get(getMechanic)
  .delete(deleteMechanic)
  .patch(updateMechanic);

export default mechanicRouter;
