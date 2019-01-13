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
	createdDate: {
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

module.exports = mongoose.model("User", schema);