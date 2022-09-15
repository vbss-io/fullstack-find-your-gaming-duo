interface GameCardProps {
  title: string;
  adsCount: number;
  bannerUrl: string;
}

export function GameCard(props: GameCardProps) {
  const { title, adsCount, bannerUrl } = props;
  return (
    <a href="" className="relative rounded-lg overflow-hidden">
      <img src={bannerUrl} alt="Image 1" />
      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
        <span className="font-bold text-white block">{title}</span>
        <span className="text-zinc-300 text-sm block">{adsCount} anúncio(s)</span>
      </div>
    </a>
  )
}
