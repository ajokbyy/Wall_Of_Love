import mongoose from 'mongoose';

const socialProofSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    enum: ['youtube', 'reddit', 'manual'],
    required: true,
  },
  product: {
    type: String,
    required: true,
  },
  sentiment: {
    type: String,
    required: true,
  },
  proofType: {
    type: String,
    enum: ['text', 'image', 'video'],
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SocialProof = mongoose.model('SocialProof', socialProofSchema);

export default SocialProof;