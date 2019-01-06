const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    companyID:{
        type: String, 
        required: true
    },
	name:{
        type: String, 
        required: true
    },
    type:{
        type: String, 
        required: true
    },
    location:{
        type: String, 
        required: true
    },
    salary:{
        type: String, 
        required: true
    },
    experience:{
        type: String, 
        required: true
    },
    description:{
        type: String, 
        required: true
    }
});

schema.set("toJSON", {
	virtuals: true
});