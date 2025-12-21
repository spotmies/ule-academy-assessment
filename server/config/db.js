import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI
            .replace('<db_user>', process.env.DB_USER)
            .replace('<db_password>', encodeURIComponent(process.env.DB_PASSWORD));

        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection failed');
        process.exit(1);
    }
};

export default connectDB;
