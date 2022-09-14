import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/index.js';
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use('/ads', routes.adsRouter);
const server = app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});
export default server;
