var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const acsSchema = new Schema({
  cpt: {
    type: Number
  },
  operyr: {
    type: Number
  },
  admqtr: {
    type: Number
  },
  age: {
    type: Number
  },
  height: {
    type: Number
  },
  weight: {
    type: Number
  },
  sex: {
    type: Boolean
  },
  race_new: {
    type: String
  },
  smoke: {
    type: Boolean
  },
  bmi: {
    type: Number
  },
  hypermed: {
    type: Boolean
  },
  diabetes: {
    type: Boolean
  },
  hxchf: {
    type: Boolean
  },
  hxcopd: {
    type: Boolean
  },
  inout: {
    type: String
  },
  optime: {
    type: String
  }
  othbleed: {
    type: String
  },
  supinfec: {
    type: String
  },
  wndinf: {
    type: String
  },
  dehis: {
    type: String
  },
  asaclas: {
    type: String
  },
  mortality: {
    type: Boolean
  },
  mortprob: {
    type: Number
  },
  morbprob: {
    type: Number
  },
  anesthes: {
    type: Number
  },
  returnor: {
    type: Boolean
  },
  readmission: {
    type: String
  },
  otherproc1: {
    type: String
  }
});

const ACS = mongoose.model("ACS", acsSchema);
module.exports = ACS;