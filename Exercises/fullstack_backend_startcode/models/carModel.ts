import mongoose, { Mongoose } from 'mongoose';
import Review from './reviewModel';

const carSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: [true, 'A car has to have model'],
      trim: true,
      maxLength: [20, 'A car must have less or equal to 20 characters'],
      minLength: [2, 'A car must have more or equal than 2 characters'],
    },
    year: Number,
    price: Number,
    color: {
      type: String,
      enum: ['red', 'blue', 'white', 'black', 'yellow', 'green'],
      message: 'Color not available',
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    //reviews: Array,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

/* carSchema.pre(/^find/, function () {
  this.populate({ path: 'reviews', select: '-__v -createdAt' });
}); */

//Bliver kun eksekveret ved create og ikke ved andre kald
/* carSchema.pre('save', async function (next) {
  const reviewsPromises = this.reviews.map((id) => Review.findById(id));
  this.reviews = await Promise.all(reviewsPromises);
  next();
}); */

carSchema.virtual('discount').get(function () {
  return this.price! * 0.25;
});

const Car = mongoose.model('Car', carSchema);

export default Car;
