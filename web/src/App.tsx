import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { GameList } from './components/GameList';
import { CreateAdBanner } from './components/CreateAdBanner';
import { IGame } from './interfaces/game';
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdModal } from './components/CreateAdModal';
import axios from 'axios';
import './styles/main.css';

//Dicas
// responsividade
// keen-slider -> Carrossel de imagens
// radix
// react hook forms
// zod -> validação
// autenticação


function App() {
  const [games , setGames] = useState<IGame[]>([]);

  useEffect(() => {
    axios('http://localhost:3000/games')
      .then(response => setGames(response.data));
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
