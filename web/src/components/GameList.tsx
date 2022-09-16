import { GameCard } from './GameCard';
import { IGame } from '../interfaces/game';

export function GameList(props: { games: IGame[] }) {
  const { games } = props;

  return (
    <div className="grid grid-cols-6 gap-6 mt-16">
      {
        games.map(game => (
          <GameCard key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads}/>
        ))
      }
    </div>
  )
}