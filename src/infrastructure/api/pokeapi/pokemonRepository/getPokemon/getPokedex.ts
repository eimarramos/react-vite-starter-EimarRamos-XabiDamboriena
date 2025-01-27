import { BASE_URL } from '../../../../../config/config'
import { PaginationResponse } from '../../types/PaginationResponse'

export const getPokedex = async () => {
  const data = await fetch(`${BASE_URL}`)
  const paginationResponse: PaginationResponse = await data.json()

  return paginationResponse
}
