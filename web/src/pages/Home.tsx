import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { GameList } from '../components/GameList';
import { CreateAdBanner } from '../components/CreateAdBanner';
import { IGame } from '../interfaces/game';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdModal } from '../components/CreateAdModal';
import axios from 'axios';
import '../styles/main.css';

//Dicas
// responsividade
// radix
// react hook forms
// zod -> validação
// autenticação


function Home() {
  const [games , setGames] = useState<IGame[]>([]);

  useEffect(() => {
    axios('http://localhost:3000/games')
      .then(response => setGames(response.data));
  }, []);

  useEffect(() => {
    console.log(games);
  }, [games]);

  return (
    <div className="max-w-[1344px] scale-75 mx-auto flex flex-col items-center -mt-10">
      <Header />
      <Dialog.Root>
        <GameList games={games} />
      </Dialog.Root>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
        </Dialog.Root>
    </div>
  )
}

export default Home
