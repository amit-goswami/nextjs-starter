import HttpService from '@/services/HttpService'
import {
  ICreateTrekRequestPayload,
  ITrekDetail
} from './trek-planner.interface'

const getTrekDetail = async (trekId: string) => {
  const getTrekDetailPayload = {
    trek: {
      trek_id: trekId
    }
  }
  try {
    const { data } = await HttpService.post(
      '/trek/gettrekdetail',
      getTrekDetailPayload
    )
    return data as ITrekDetail
  } catch (error) {
    console.error('Error during login request:', error)
    return null
  }
}

const getSearchedCities = async (searchInput: string) => {
  try {
    const response = await HttpService.get('/city?search=${searchInput}')
    return response.data
  } catch (error) {
    console.error('Error during login request:', error)
    return null
  }
}

const createTrekRequest = async (
  createTrekRequestPayload: ICreateTrekRequestPayload
) => {
  const payload = {
    trek_req: {
      ...createTrekRequestPayload
    }
  }
  try {
    const response = await HttpService.post('/trek-request', payload)
    return response
  } catch (error) {
    console.error('Error during login request:', error)
    return null
  }
}

const trekDetailService = {
  getTrekDetail,
  getSearchedCities,
  createTrekRequest
}

export default trekDetailService
