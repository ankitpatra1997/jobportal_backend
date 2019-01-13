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
    phone:{
        type: String, 
        required: true
    },
    description:{
        type: String, 
        required: true
    },
    website:{
        type: String, 
        required: true
    },
    address:{
        type: String, 
        required: true
    },
    photo:{
        type: String, 
        required: true
    }
});

schema.set("toJSON", {
	virtuals: true
});

module.exports = mongoose.model("Company", schema);