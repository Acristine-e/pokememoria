import { kantoDemoPokemon } from './data/kantoDemo'

function App() {
  const sample = kantoDemoPokemon[3]

  return (
    <main className="min-h-screen bg-blue-950 text-white flex flex-col items-center justify-center gap-6 p-6 text-center">
      <h1 className="text-4xl font-extrabold text-yellow-400 sm:text-6xl">
        PokéMemória
      </h1>
      <p className="max-w-md text-lg">
        Você conhece o Pokémon. Só esqueceu o nome dele.
      </p>
      <img
        src={sample.imageUrl}
        alt="Pokémon de teste"
        className="h-40 w-40"
      />
      <button className="rounded-lg bg-red-600 px-8 py-3 font-bold hover:bg-red-500">
        Jogar
      </button>
      <footer className="text-xs text-blue-200">
        Projeto independente e não oficial, sem afiliação com The Pokémon
        Company, Nintendo ou Game Freak.
      </footer>
    </main>
  )
}

export default App