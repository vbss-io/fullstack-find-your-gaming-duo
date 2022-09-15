// route para ads
import { Router } from 'express';
import { PrismaClient } from '@prisma/client'

const gamesRouter = Router();
const prisma = new PrismaClient({
  log: ['query'],
})

gamesRouter.get('/', async (_req, res) => {
  const games = await prisma.game.findMany({ include:
    {
      _count: {
        select: {
          ads: true
        }
      }
    }
  })

  res.status(200).json(games);
});

export default gamesRouter;