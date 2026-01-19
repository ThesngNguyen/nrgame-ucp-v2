import express, { Request, Response } from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'samp_db'
};

app.get('/api/status', (req: Request, res: Response) => {
  res.json({
    message: "SAMP UCP API (TypeScript) is running!",
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`[Server]: Backend TS running at http://localhost:${PORT}`);
});