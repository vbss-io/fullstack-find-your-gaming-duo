import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query'],
})

export const getGames = async () => {
  const games = await prisma.game.findMany(
    {
      include:
      {
        _count: {
          select: {
            ads: true
          }
        }
      }
    })
  return games;
}
