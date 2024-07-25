import HttpService from '@/services/HttpService'
import { ISeasonalTreks, SEASONS } from './seasonal-treks.interface'

const getSeasonalTreksList = async (season: SEASONS) => {
  try {
    const { data } = await HttpService.post('/trek/gettreksbygenre', {
      trek: {
        genre: [season]
      }
    })
    return data as ISeasonalTreks
  } catch (error) {
    console.error('Error during login request:', error)
    return null
  }
}

const seasonalTreksService = {
  getSeasonalTreksList
}

export default seasonalTreksService
