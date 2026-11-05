import { useState } from 'react'
import Game from './components/Game'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <main className="min-h-screen bg-blue-950 text-white flex flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-4xl font-extrabold text-yellow-400 sm:text-6xl">
        PokéMemória
      </h1>

      {isPlaying ? (
        <Game />
      ) : (
        <>
          <p className="max-w-md text-lg">
            Você conhece o Pokémon. Só esqueceu o nome dele.
          </p>
          <button
            onClick={() => setIsPlaying(true)}
            className="rounded-lg bg-red-600 px-8 py-3 font-bold hover:bg-red-500"
          >
            Jogar
          </button>
        </>
      )}

      <footer className="text-xs text-blue-200">
        Projeto independente e não oficial, sem afiliação com The Pokémon
        Company, Nintendo ou Game Freak.
      </footer>
    </main>
  )
}

export default App