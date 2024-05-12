import HttpService from '@/services/HttpService'
import { IBestTreksList } from './home.interface'

const baseUrl = process.env.NEXT_PUBLIC_API_URL

const getBestTreksList = async () => {
  const getBestTrekPayload = {
    trek: {
      genre: []
    }
  }
  try {
    const { data } = await HttpService.post(`${baseUrl}/trek/getbesttreks`, {
      ...getBestTrekPayload
    })
    return data as IBestTreksList
  } catch (error) {
    console.error('Error during getBestTreksList request:', error)
    return null
  }
}

const homeService = {
  getBestTreksList
}

export default homeService
