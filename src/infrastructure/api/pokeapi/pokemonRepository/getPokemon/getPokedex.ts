import { BASE_URL } from '../../../../../config/config'
import { PaginationResponse } from '../../types/PaginationResponse'

export const getPokedex = async () => {
  const data = await fetch(`${BASE_URL}?limit=${150}&offset=0`)
  const paginationResponse: PaginationResponse = await data.json()

  return paginationResponse
}
