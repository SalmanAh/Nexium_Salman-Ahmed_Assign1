// models/Quote.js
import mongoose from 'mongoose';

const QuoteSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: 'Anonymous',
  },
}, {
  timestamps: true,
});

export const Quote = mongoose.models.Quote || mongoose.model('Quote', QuoteSchema);
