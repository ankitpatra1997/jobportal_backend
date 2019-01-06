const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
	board:{
        type: String, 
        required: true
    },
    institutionType:{
        type: String, 
        required: true
    },
    institution:{
        type: String, 
        required: true
    },
    obtainedMarks:{
        type: String, 
        required: true
    },
    totalMarks:{
        type: String, 
        required: true
    },
    passOutYear:{
        type: String, 
        required: true
    }
});

schema.set("toJSON", {
	virtuals: true
});