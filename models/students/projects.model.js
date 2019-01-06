const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
	name:{
        type: String, 
        required: true
    },
    description:{
        type: String, 
        required: true
    },
    link:{
        type: String, 
        required: true
    },
    startDate:{
        type: String, 
        required: true
    },
    endDate:{
        type: String, 
        required: true
    }
});

schema.set("toJSON", {
	virtuals: true
});