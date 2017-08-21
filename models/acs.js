var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const acsSchema = new Schema({
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  races: {
    type: String
  },
  smoking_status: {
    type: Boolean
  },
  BMI: {
    type: Number
  },
  HTN: {
    type: Boolean
  },
  DIABETES: {
    type: Boolean
  },
  CHF: {
    type: Boolean
  },
  ASA_Class: {
    type: String
  },
  COPD: {
    type: Boolean
  },
  operative_time: {
    type: String
  },
  INvsOutvsASC: {
    type: String
  },
  Outcomes: {
  	type: String
  }
});

const ACS = mongoose.model("ACS", acsSchema);
module.exports = ACS;