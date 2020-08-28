const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodAndWaterSchema = new Schema({
  foodInCalories: {type: Number, required: true},
  waterInLiters: {type: Number, required: true}
});

const physicalSchema = new Schema({
  exerciseThatDay: {type: Number, required: true}
});

const mentalSchema = new Schema({
  mentalRating: {type: Number, required: true},
  hoursOfSleep: {type: Number, required: true}
});

const medicineSchema = new Schema({
  name: {type: String, required: true},
  dosesInADay: {type: Number, required: true}
});

var userSchema = new Schema({
	firstname: {type: String, required: true, min:3,},
	lastname: {type: String, required: true, min:3,},
	email: {type: String, required: true},
	password: {type: String, min:8, required: true},
  age: {type: Number, required: true},
  gender: {type:String, required: true},
  height: {type: Number, required: true},
  weight: {type: Number, required: true},
  foodAndWaterStats: [foodAndWaterSchema],
  physicalStats: [physicalSchema],
  mentalStats: [mentalSchema],
  medicineRecords: [medicineSchema],
}, {
	toJSON: {
		virtuals: true,
	},
	toObject: {
		virtuals: true,
	},
	id: false,
});

//virtual schema 'fullname' for userSchema
userSchema.virtual('fullname').get(function(){
	return (this.firstname + " " + this.lastname);
});

//url parameter for user
userSchema.virtual('url').get(function(){
	return '/users/'+this._id;
});

module.exports = mongoose.model('User', userSchema);
