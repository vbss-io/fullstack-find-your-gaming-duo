import { Request, Response } from "express";
import { getGamesService } from "../services/games.service";

export const getGamesController = async (_req: Request, res: Response) => {
  const games = await getGamesService();
  
  res.status(200).json(games);
}