import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { GameList } from './components/GameList';
import { CreateAdBanner } from './components/CreateAdBanner';
import { IGame } from './interfaces/game';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdModal } from './components/CreateAdModal';
import './styles/main.css';


function App() {
  const [games , setGames] = useState<IGame[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/games')
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <Header />
      <GameList games={games} />
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
