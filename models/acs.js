var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const acsSchema = new Schema({
  age: {
    type: Number
  },
  HEIGHT: {
    type: Number
  },
  WEIGHT: {
    type: Number
  },
  SEX: {
    type: String
  },
  RACE: {
    type: String
  },
  SMOKE: {
    type: Boolean
  },
  BMI: {
    type: Number
  },
  HYPERMED: {
    type: Boolean
  },
  DIABETES: {
    type: Boolean
  },
  HXCHF: {
    type: Boolean
  },
  ASACLAS: {
    type: String
  },
  HXCOPD: {
    type: Boolean
  },
  OPTIME: {
    type: String
  },
  INOUT: {
    type: String
  },
  OTHBLEED: {
    type: String
  },
  SUPINFEC: {
    type: String
  },
  WNDINFD: {
    type: String
  },
  DEHIS: {
    type: String
  },
  RETURNOR: {
    type: Boolean
  },
  READMISSION: {
    type: String
  }
});

const ACS = mongoose.model("ACS", acsSchema);
module.exports = ACS;