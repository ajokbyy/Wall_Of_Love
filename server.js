
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
// Change 'flex_watches_db' to your preferred database name
mongoose.connect('mongodb://localhost:27017/flex_watches_db')
  .then(() => console.log('Connected to Local MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
  id: String,
  user: {
    name: String,
    handle: String,
    avatar: String
  },
  platform: String, // 'twitter', 'instagram', 'youtube', 'review'
  content: String,
  timestamp: String,
  mediaUrl: String,
  verified: Boolean,
  product: String
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

// API Endpoints
app.get('/api/testimonials', async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.json(testimonials);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Seed endpoint (Optional: run once to populate your local DB)
app.post('/api/seed', async (req, res) => {
  const sample = {
    id: "db-1",
    user: { name: "Local Legend", handle: "@local_enthusiast", avatar: "https://picsum.photos/seed/local/100/100" },
    platform: "review",
    content: "Just picked this up from the local boutique. The Flex quality is unmatched!",
    timestamp: "Just now",
    verified: true,
    product: "Chrono-Steel Pro"
  };
  try {
    await Testimonial.create(sample);
    res.json({ message: "Seed successful" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Flex Watches API running at http://localhost:${PORT}`);
});
