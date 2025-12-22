import Question from '../models/Question.js';
import Assessment from '../models/Assessment.js';
import { calculateAssessmentResults } from '../utils/calculations/index.js';
import { notifyNewAssessment } from '../utils/adminSocket.js';

export const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().select('-correctOption');
    res.json({ success: true, data: questions });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch questions' });
  }
};

export const submitAssessment = async (req, res) => {
  try {
    const { candidate, aptitude, olq } = req.body;

    if (!candidate || !aptitude || !olq) {
      return res.status(400).json({
        success: false,
        message: 'Invalid payload'
      });
    }

    const questions = await Question.find().select('+correctOption');
    const results = calculateAssessmentResults(questions, req.body);

    const assessment = await Assessment.create({
      candidate,
      responses: { aptitude, olq },
      scores: results.scores,
      factorBreakdown: results.factorBreakdown
    });

    notifyNewAssessment({
      _id: assessment._id,
      candidate: assessment.candidate,
      scores: assessment.scores,
      createdAt: assessment.createdAt
    });

    res.status(201).json({
      success: true,
      data: {
        ...assessment.toObject(),
        detailedOlq: results.detailedOlq,
        top3: results.top3,
        bottom3: results.bottom3
      }
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message || 'Assessment submission failed'
    });
  }
};

export const verifyCoachPin = (req, res) => {
  const pin = process.env.COACH_PIN || '1234';

  res.json({
    success: true,
    valid: req.body.pin === pin
  });
};
