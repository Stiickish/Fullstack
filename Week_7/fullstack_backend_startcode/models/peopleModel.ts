import mongoose, { Mongoose } from "mongoose";

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A person has to have a name'],
        trim: true,
        maxLength: [20, 'A person must have less or equal to 20 characters'],
        minLength: [2, 'A person must have more or equal than 2 characters']
    },
    age: Number,
    city: {
        type: String,
        enum: ['Brønshøj', 'Vanløse','Brøndby', 'Amager', 'Valby', 'Frederiksberg'],
        message: 'City is not available'
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        select: false
    }
})

const Person = mongoose.model('Person', peopleSchema);

export default Person;