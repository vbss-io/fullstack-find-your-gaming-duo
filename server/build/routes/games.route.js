var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// route para ads
import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
const gamesRouter = Router();
const prisma = new PrismaClient({
    log: ['query'],
});
gamesRouter.get('/', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const games = yield prisma.game.findMany();
    res.status(200).json(games);
}));
export default gamesRouter;
