import mongoose, {Schema} from 'mongoose';

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A person must have a name'],
        trim: true,
    },
    age: {
        type: Number,
        required: [true, 'A person must have a age'],
        minValue: [0, 'A person cannot be under 0 years old'],
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
    addresses: {
        type: [Schema.Types.ObjectId],
        ref:'Address',
    }
});

const Person = mongoose.model('Person', personSchema);

export default Person;