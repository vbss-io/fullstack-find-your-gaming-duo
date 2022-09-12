import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/ads', (_req, res) => {
  return res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
