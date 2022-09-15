// route para ads
import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const discordRouter = Router();
const prisma = new PrismaClient({
  log: ['query'],
})

discordRouter.get('/ads/:id', async (req, res) => {
  const { id: adId } = req.params;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    },
  });

  res.status(200).json({
    discord: ad.discord,
  });
});

export default discordRouter;