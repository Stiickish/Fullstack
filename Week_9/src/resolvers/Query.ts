import Person from "../../models/personModel";
import Address from "../../models/addressModel";

export default {
    people: async () => await Person.find().populate("addresses"),
    addresses: async () => await Address.find().populate("people"),
}