import { getGames } from "../models/games.model";

export const getGamesService = async () => {
  return getGames();
}