import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.use(cors());

app.use('/games', routes.gamesRouter);
app.use('/ads', routes.adsRouter);
app.use('/discord', routes.discordRouter);

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
