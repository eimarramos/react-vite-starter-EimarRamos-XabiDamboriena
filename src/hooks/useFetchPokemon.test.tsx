import { renderHook, waitFor } from '@testing-library/react'
import { useGetPokemons } from './useFetchPokemons'

describe('useGetPokemons', () => {
  test('Deberia devolver 150 pokemons', async () => {
    const { result } = renderHook(() => useGetPokemons(150))

    await waitFor(
      () => {
        expect(result.current.pokemons).toHaveLength(150)
      },
      { timeout: 5000 },
    )
  })
})
