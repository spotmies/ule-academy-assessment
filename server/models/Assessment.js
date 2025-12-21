import mongoose from 'mongoose';

const assessmentSchema = new mongoose.Schema({
  candidate: {
    name: { type: String, required: true },
    entry: { type: String, required: true },
    attempt: { type: Number, required: true }
  },

  responses: {
    aptitude: {
      type: Map,
      of: String,
      required: true
    },
    olq: {
      type: Map,
      of: Number,
      required: true
    }
  },

  scores: {
    aptitudeRaw: Number,
    aptitudePercentage: Number,
    olqOverall: Number,
    olqPercentage: Number,
    compatibility: Number
  },

  factorBreakdown: {
    factorI: Number,
    factorII: Number,
    factorIII: Number,
    factorIV: Number
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Assessment', assessmentSchema);
