import type { Pokemon } from '../types/pokemon'

const artworkUrl = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

export const kantoDemoPokemon: Pokemon[] = [
  { id: 1, name: 'Bulbasaur', imageUrl: artworkUrl(1) },
  { id: 4, name: 'Charmander', imageUrl: artworkUrl(4) },
  { id: 7, name: 'Squirtle', imageUrl: artworkUrl(7) },
  { id: 25, name: 'Pikachu', imageUrl: artworkUrl(25) },
  { id: 39, name: 'Jigglypuff', imageUrl: artworkUrl(39) },
  { id: 52, name: 'Meowth', imageUrl: artworkUrl(52) },
  { id: 54, name: 'Psyduck', imageUrl: artworkUrl(54) },
  { id: 94, name: 'Gengar', imageUrl: artworkUrl(94) },
  { id: 133, name: 'Eevee', imageUrl: artworkUrl(133) },
  { id: 143, name: 'Snorlax', imageUrl: artworkUrl(143) },
]