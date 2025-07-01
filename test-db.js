// test-db.js
import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './lib/mongo.js';
import { Quote } from './models/Quote.js';

const run = async () => {
  await connectDB();

  const newQuote = new Quote({
    text: "Your vibe attracts your tribe.",
    author: "Unknown"
  });

  await newQuote.save();
  console.log("✅ Quote saved!");

  const allQuotes = await Quote.find();
  console.log("📜 Quotes in database:");
  console.log(allQuotes);

  process.exit();
};

run();