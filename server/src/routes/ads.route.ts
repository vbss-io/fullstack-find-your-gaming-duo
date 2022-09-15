// route para ads
import { Router } from 'express';

const adsRouter = Router();

adsRouter.get('/', (_req, res) => {
  return res.send('Hello World4!');
});

export default adsRouter;