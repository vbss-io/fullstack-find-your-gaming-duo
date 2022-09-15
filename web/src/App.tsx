import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { GameCard } from './components/GameCard';
import { CreateAdBanner } from './components/CreateAdBanner';
import * as Dialog from '@radix-ui/react-dialog';
import './styles/main.css';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

function App() {
  const [games , setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <Header />

      <div className="grid grid-cols-6 gap-6 mt-16">
        {
          games.map(game => (
            <GameCard key={game.id} bannerUrl={game.bannerUrl} title={game.title} adsCount={game._count.ads}/>
          ))
        }
      </div>

      <Dialog.Root>
        <CreateAdBanner />
      </Dialog.Root>
    </div>
  )
}

export default App
