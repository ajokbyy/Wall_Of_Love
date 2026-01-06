import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import wallOfLoveRoutes from './routes/wallOfLove.js';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/wall-of-love', wallOfLoveRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Wall of Love API is running' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});