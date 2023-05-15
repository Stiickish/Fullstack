import mongoose, { Mongoose } from "mongoose";

const peopleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A person has to have name'],
        trim: true
    },
    age: Number, 
    city: String
})

const Person = mongoose.model('Person', peopleSchema);

export default Person;