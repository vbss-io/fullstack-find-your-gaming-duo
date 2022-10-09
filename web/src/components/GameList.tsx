import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react'
import { GameCard } from './GameCard';
import { IGame } from '../interfaces/game';
import { CaretLeft, CaretRight, CircleNotch } from 'phosphor-react'

export function GameList(props: { games: IGame[] }) {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: false,
      mode: "free-snap",
      renderMode: "precision",
      slides: { origin: "auto", perView: 5, spacing: 10 },
    }
  )

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  const { games } = props;
  return (
    <>
    {loaded ? (
      <div className="navigation-wrapper mt-16 max-w-[1344px] flex flex-row items-center">
        <CaretLeft
          onClick={() =>
            instanceRef.current?.prev()
          }
          size={48}
          color="white"
          className="mr-2 cursor-pointer hover:opacity-50 hover:scale-125 transition-all duration-200"
        />
        <div ref={sliderRef} className="keen-slider flex">
        {
          games.map((game, index) => (
            <GameCard
              slide={index + 1}
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}/>
          ))
        }
        </div>
          <CaretRight
            onClick={() =>
              instanceRef.current?.next()
            }
            size={48}
            color="white"
            className="ml-2 cursor-pointer hover:opacity-50 hover:scale-125 transition-all duration-200"
          />
      </div>
    ) : (
      <svg className="animate-spin h-11 w-11 mt-16 mb-16" viewBox="0 0 64 64" >
        <CircleNotch size={64} color="white"/>
      </svg>
    )}
    </>
  )
}