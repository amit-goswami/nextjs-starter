import HttpService from '@/services/HttpService'
import { ICreateQueryPayload, IQuery } from './queries.interface'

const createQuery = async (createQueryData: ICreateQueryPayload) => {
  try {
    const { data } = await HttpService.post('/enquiry', createQueryData)
    return data
  } catch (error) {
    console.error('Error during query request:', error)
    return null
  }
}

const getQueries = async (email: string) => {
  try {
    const { data } = await HttpService.get('/query?email=${email}')
    return data.query as IQuery[]
  } catch (error) {
    console.error('Error during queries request:', error)
    return null
  }
}

const QueryService = {
  createQuery,
  getQueries
}

export default QueryService
