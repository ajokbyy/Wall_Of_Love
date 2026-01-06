import express from 'express';
import SocialProof from '../models/SocialProof.js';

const router = express.Router();

// GET /api/wall-of-love
// Fetch approved social proofs with optional filters
router.get('/', async (req, res) => {
  try {
    const { product, platform, sentiment } = req.query;

    // Build filter object
    const filter = { approved: true };

    if (product) filter.product = product;
    if (platform) filter.platform = platform;
    if (sentiment) filter.sentiment = sentiment;

    // Fetch social proofs
    const socialProofs = await SocialProof.find(filter).sort({ createdAt: -1 });

    res.json({
      success: true,
      data: socialProofs,
      count: socialProofs.length,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});

// POST /api/wall-of-love
// Save new manual testimonial
router.post('/', async (req, res) => {
  try {
    const { text, user, platform, product, sentiment, proofType } = req.body;

    // Validate required fields
    if (!text || !user || !platform || !product || !sentiment || !proofType) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    // Validate platform and proofType enums
    const validPlatforms = ['youtube', 'reddit', 'manual'];
    const validProofTypes = ['text', 'image', 'video'];

    if (!validPlatforms.includes(platform)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid platform',
      });
    }

    if (!validProofTypes.includes(proofType)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid proof type',
      });
    }

    // Create new social proof
    const newSocialProof = new SocialProof({
      text,
      user,
      platform,
      product,
      sentiment,
      proofType,
      approved: true, // Automatically approve manual testimonials
    });

    const savedProof = await newSocialProof.save();

    res.status(201).json({
      success: true,
      data: savedProof,
      message: 'Testimonial added successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});

export default router;