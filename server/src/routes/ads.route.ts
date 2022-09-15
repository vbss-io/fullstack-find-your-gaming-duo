// route para ads
import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import { convertHourStringToMinutes } from '../utils/hour-string-to-minutes.utils';
import { convertMinutesToHourString } from '../utils/minutes-to-hour-string-utils';

const adsRouter = Router();
const prisma = new PrismaClient({
  log: ['query'],
})

adsRouter.get('/game/:id', async (req, res) => {
  const { id: gameId } = req.params;

  const ads = await prisma.ad.findMany({
    select: {
      id: true,
      name: true,
      weekDays: true,
      useVoiceChat: true,
      yearsPlaying: true,
      hoursStart: true,
      hoursEnd: true,
    },
    where: {
      gameId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  res.status(200).json(ads.map((ad) => {
    return {
      ...ad,
      weekDays: ad.weekDays.split(','),
      hoursStart: convertMinutesToHourString(ad.hoursStart),
      hoursEnd: convertMinutesToHourString(ad.hoursEnd),
    }
  }));
});

adsRouter.post('/game/:id', async (req, res) => {
  const { id: gameId } = req.params;

  // Validação recomendada: Zod

  const {
    name,
    yearsPlaying,
    discord,
    weekDays,
    hoursStart,
    hoursEnd,
    useVoiceChat
  } = req.body;

  const ad = await prisma.ad.create({
    data: {
      gameId,
      name,
      yearsPlaying,
      discord,
      weekDays: weekDays.join(','),
      hoursStart: convertHourStringToMinutes(hoursStart),
      hoursEnd: convertHourStringToMinutes(hoursEnd),
      useVoiceChat
    },
  });

  return res.status(200).json(ad);
});

export default adsRouter;