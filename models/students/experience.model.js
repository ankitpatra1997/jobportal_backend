const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    studentID:{
        type: String,
        required: true
    },
    employment:{
        type: String,
        required: true
    },
	name:{
        type: String, 
        required: true
    },
    position:{
        type: String, 
        required: true
    },
    skillWokedOn:{
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

module.exports = mongoose.model("StudentExperience", schema);