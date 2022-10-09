import { Router } from 'express';
import { getGamesController } from '../controllers/games.controller';

const gamesRouter = Router();

gamesRouter.get('/', getGamesController);

export default gamesRouter;