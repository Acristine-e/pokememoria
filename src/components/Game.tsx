import { useState, type FormEvent } from 'react'
import { kantoDemoPokemon } from '../data/kantoDemo'
import { isCorrectAnswer } from '../game/checkAnswer'
import type { Pokemon } from '../types/pokemon'

type Feedback = 'correct' | 'wrong' | null

function pickRandomPokemon(exceptId?: number): Pokemon {
  const options = kantoDemoPokemon.filter((pokemon) => pokemon.id !== exceptId)
  return options[Math.floor(Math.random() * options.length)]
}

export default function Game() {
  const [pokemon, setPokemon] = useState<Pokemon>(() => pickRandomPokemon())
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState<Feedback>(null)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (feedback !== null || answer.trim() === '') return
    setFeedback(isCorrectAnswer(answer, pokemon.name) ? 'correct' : 'wrong')
  }

  function handleNext() {
    setPokemon(pickRandomPokemon(pokemon.id))
    setAnswer('')
    setFeedback(null)
  }

  return (
    <section className="flex w-full max-w-md flex-col items-center gap-5">
      <img
        src={pokemon.imageUrl}
        alt="Pokémon misterioso"
        className="h-56 w-56 object-contain"
      />

      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
        <label htmlFor="answer" className="text-lg font-bold">
          Qual é o nome deste Pokémon?
        </label>
        <input
          id="answer"
          type="text"
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          disabled={feedback !== null}
          autoComplete="off"
          className="rounded-lg border-2 border-yellow-400 bg-white px-4 py-3 text-center text-lg text-blue-950 disabled:opacity-60"
        />
        {feedback === null && (
          <button
            type="submit"
            className="rounded-lg bg-red-600 px-8 py-3 font-bold hover:bg-red-500"
          >
            Responder
          </button>
        )}
      </form>

      {feedback === 'correct' && (
        <p role="status" className="text-xl font-bold text-green-400">
          Acertou! É o {pokemon.name}!
        </p>
      )}
      {feedback === 'wrong' && (
        <p role="status" className="text-xl font-bold text-red-400">
          Errou! Era o {pokemon.name}.
        </p>
      )}

      {feedback !== null && (
        <button
          type="button"
          onClick={handleNext}
          className="rounded-lg bg-yellow-400 px-8 py-3 font-bold text-blue-950 hover:bg-yellow-300"
        >
          Próximo Pokémon
        </button>
      )}
    </section>
  )
}