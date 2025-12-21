import mongoose from 'mongoose';

const optionSchema = new mongoose.Schema(
  { label: String, value: String },
  { _id: false }
);

const questionSchema = new mongoose.Schema({
  section: { type: String, enum: ['A', 'B'], required: true },
  qId: { type: Number, required: true },
  text: { type: String, required: true },

  // Aptitude
  options: [optionSchema],
  correctOption: { type: String, select: false },

  // OLQ
  olqName: String,
  factor: { type: String, enum: ['I', 'II', 'III', 'IV'] }
});

export default mongoose.model('Question', questionSchema);
