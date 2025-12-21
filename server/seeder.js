import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Question from './models/Question.js';
import { questions } from './data/seedData.js';

dotenv.config();
await connectDB();

await Question.deleteMany();
await Question.insertMany(questions);

console.log('Database seeded');
process.exit();
