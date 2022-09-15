import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/games', routes.gamesRouter);
app.use('/ads', routes.adsRouter);

// app.get('/', (_req, res) => {
//   res.send('Hello World!');
// });

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});

// export default server;