import express from 'express';
import {
  getAllAddresses,
  createAddress,
  getAddress,
  updateAddress,
  deleteAddress,
} from '../controllers/addressController';

const addressRouter = express.Router();

addressRouter.route('/').get(getAllAddresses).post(createAddress);
addressRouter
  .route('/')
  .get(getAddress)
  .delete(deleteAddress)
  .patch(updateAddress);

export default addressRouter;
