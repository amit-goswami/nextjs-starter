import HttpService from '@/services/HttpService'
import { ICreateQueryPayload, IQuery } from './home.interface'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

const createQuery = async (createQueryData: ICreateQueryPayload) => {
  try {
    const { data } = await HttpService.post(`${baseUrl}/query`, createQueryData)
    return data
  } catch (error) {
    console.error('Error during query request:', error)
    return null
  }
}

const getQueries = async (email: string) => {
  try {
    const { data } = await HttpService.get(`${baseUrl}/query?email=${email}`)
    return data.query as IQuery[]
  } catch (error) {
    console.error('Error during queries request:', error)
    return null
  }
}

const HomeService = {
  createQuery,
  getQueries
}

export default HomeService
