var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var radiusSchema = new Schema({
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
  },
  othbleed: {
    type: Number
  },
  supinfec: {
    type: Number
  },
  wndinf: {
    type: Number
  },
  wndinfd: {
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

var Radius = mongoose.model("case", radiusSchema);
module.exports = Radius;