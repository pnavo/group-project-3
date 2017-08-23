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
    type: Number
  },
  race_new: {
    type: String
  },
  smoke: {
    type: Number
  },
  bmi: {
    type: Number
  },
  hypermed: {
    type: Number
  },
  diabetes: {
    type: Number
  },
  hxchf: {
    type: Number
  },
  hxcopd: {
    type: Number
  },
  inout: {
    type: String
  },
  optime: {
    type: Number
  }
  othbleed: {
    type: Number
  },
  supinfec: {
    type: Number
  },
  wndinf: {
    type: Number
  },
  dehis: {
    type: Number
  },
  asaclas: {
    type: Number
  },
  mortality: {
    type: Number
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
    type: Number
  },
  readmission: {
    type: Number
  },
  otherproc1: {
    type: String
  }
});

const ACS = mongoose.model("ACS", acsSchema);
module.exports = ACS;