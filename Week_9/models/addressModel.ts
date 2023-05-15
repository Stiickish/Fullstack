import mongoose, {Schema} from "mongoose";

const addressSchema = new mongoose.Schema({
    street:String,
    zip: Number,
    people: {
        type:[Schema.Types.ObjectId],
        ref:'Person',
    },
});

const Address = mongoose.model('Address', addressSchema);

export default Address;