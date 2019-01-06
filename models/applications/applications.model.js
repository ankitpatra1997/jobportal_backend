const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
	applicantName:{
        type: String, 
        required: true
    },
    applicantID:{
        type: String, 
        required: true
    },
    jobID:{
        type: String, 
        required: true
    },
    companyID:{
        type: String, 
        required: true
    },
    status:{
        type: String, 
        required: true
    },
    appliedDate:{
        type: Date,
		default: Date.now,
		required: false
    }
});

schema.set("toJSON", {
	virtuals: true
});