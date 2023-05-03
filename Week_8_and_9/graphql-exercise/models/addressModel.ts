import mongoose, { Mongoose } from 'mongoose';

const addressSchema = new mongoose.Schema(
  {
    street: {
      type: String,
      required: [true, 'An address must have a street name'],
      trim: true,
      maxLength: [20, 'A address must have less or equal to 20 characters'],
      minLength: [2, 'A address must have more or equal than 2 characters'],
    },
    street_number: Number,
    floor: String,
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);


const AddressModel = mongoose.model('Address', addressSchema);

export default AddressModel;
