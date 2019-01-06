const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		unique: true,
		required: true
	},
	createdData: {
		type: Date,
		default: Date.now,
		required: false
	},
	hash: {
		type: String,
		required: true
	},
	typeOfUser: {
		type: String,
		required: true
	}
});

schema.set("toJSON", {
	virtuals: true
});