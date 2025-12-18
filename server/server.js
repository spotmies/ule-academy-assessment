import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
// import mongoSanitize from 'express-mongo-sanitize';
import hpp from 'hpp';
// import xss from 'xss-clean';
import morgan from 'morgan';

import connectDB from './config/db.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import assessmentRoutes from './routes/assessmentRoutes.js';

dotenv.config();
connectDB();

const app = express();

// Security Headers & CORS
app.use(helmet());
app.use(cors());

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Add this line

// Data Sanitization
// app.use(mongoSanitize());
// app.use(xss());
app.use(hpp());

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Routes
app.use('/api/assessment', assessmentRoutes);

// Error Handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});