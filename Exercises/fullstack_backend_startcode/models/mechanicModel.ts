import mongoose from 'mongoose';
import slugify from 'slugify';
import { setFlagsFromString } from 'v8';

const mechanicSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'A mechanic must have a firstname'],
    trim: true,
  },
  lastname: {
    type: String,
    required: [true, 'A mechanic must have a lastname'],
    trim: true,
  },
  email: {
    type: String,
    validate: {
      validator: function (email: string) {
        return /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
      },
      required: [true, 'Email address validation failed'],
      unique: true,
      lowercase: true,
    },
    role: {
      type: String,
      enum: ['mechanic-intern', 'mechanic', 'lead-mechanic'],
      default: 'mechanic',
    },
    password: {
      type: String,
      require: [true, 'Please provide a password'],
      minlength: [8, 'password must be atleast 8 characters'],
      select: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car',
      required: [true, 'A mechanic must be assigned to a car'],
    },
    slug: String,
  },
});

/* mechanicSchema.pre('save', function (next) {
  this.slug = slugify(this.firstname + this.lastname, { lower: true });
  next();
}); */

mechanicSchema.pre(/^find/, function () {
  this.populate({
    path: 'car',
  });
});


//Document middleware. runs after .save() and .create()
mechanicSchema.post('save', function (doc, next) {
  console.log(doc);
  next();
});

const Mechanic = mongoose.model('Mechanic', mechanicSchema);

export default Mechanic;
