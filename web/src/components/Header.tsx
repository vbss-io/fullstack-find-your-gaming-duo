import logoImg from '../assets/logo-nlw.svg';

export function Header() {
  return (
    <header className="mx-auto flex flex-col items-center">
      <img src={logoImg} alt="Logo NLW e-Sports" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui!
      </h1>
    </header>
  );
}