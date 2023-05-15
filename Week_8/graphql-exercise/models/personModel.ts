import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A person has to have a name'],
    trim: true,
    maxLength: [50, 'A person must have less or equal to 50 characters'],
    minLength: [5, 'A person must have more or equal than 5 characters'],
  },
  age: Number,
  city: {
    type: String,
    enum: [
      'Brønshøj',
      'Vanløse',
      'Brøndby',
      'Amager',
      'Valby',
      'Frederiksberg',
    ],
    message:
      'City must be Brønshøj, Vanløse, Brøndby, Amager, Valby or Frederiksberg',
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
  },
});

personSchema.pre(/^find/, function () {
  this.populate({
    path: 'address',
    select: '-__v -createdAt',
  });
});

personSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'address',
  });
  next();
});

personSchema.post('save', function (doc, next) {
  console.log(doc);
  next();
});

const PersonModel = mongoose.model('Person', personSchema);

export default PersonModel;
