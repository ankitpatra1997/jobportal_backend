const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
	phone: {
        type: String,
        required: true
    },
    skills: {
        type: Array,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    resume: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    houseNo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});

schema.set("toJSON", {
	virtuals: true
});