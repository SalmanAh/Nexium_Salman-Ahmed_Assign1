// check-connection.js
import dotenv from 'dotenv';
dotenv.config();

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

prisma.$connect()
  .then(() => {
    console.log("✅ Successfully connected to Supabase PostgreSQL!");
  })
  .catch((err) => {
    console.error("❌ Connection failed:", err.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit();
  });
