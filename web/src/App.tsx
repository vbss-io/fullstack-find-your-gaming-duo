import './styles/main.css';
import logoImg from './assets/logo-nlw.svg';
import { MagnifyingGlassPlus } from 'phosphor-react';

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="Logo NLW e-Sports" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui!
      </h1>

      {/* Jogos */}
      <div className="grid grid-cols-6 gap-6 mt-16">
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/Image1.png" alt="Image 1" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <span className="font-bold text-white block">Game</span>
            <span className="text-zinc-300 text-sm block">Ads</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/Image2.png" alt="Image 2" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <span className="font-bold text-white block">Game</span>
            <span className="text-zinc-300 text-sm block">Ads</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/Image3.png" alt="Image 3" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <span className="font-bold text-white block">Game</span>
            <span className="text-zinc-300 text-sm block">Ads</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/Image4.png" alt="Image 4" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <span className="font-bold text-white block">Game</span>
            <span className="text-zinc-300 text-sm block">Ads</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/Image5.png" alt="Image 5" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <span className="font-bold text-white block">Game</span>
            <span className="text-zinc-300 text-sm block">Ads</span>
          </div>
        </a>
        <a href="" className="relative rounded-lg overflow-hidden">
          <img src="/Image6.png" alt="Image 6" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <span className="font-bold text-white block">Game</span>
            <span className="text-zinc-300 text-sm block">Ads</span>
          </div>
        </a>
      </div>

      {/* Footer */}
      <div className="pt-1 mt-8 bg-nlw-gradient self-stretch rounded-lg overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu Duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>

            <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
              <MagnifyingGlassPlus size={24}/>
              Publicar anúncio
            </button>
        </div>
      </div>
    </div>
  )
}

export default App
