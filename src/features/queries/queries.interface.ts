import { QUERY_STATUS } from '../shared/shared.interface'

export interface ICreateQueryPayload {
  query: {
    name: string
    email: string
    mobileNo: number
    message: string
  }
}

export interface IQuery {
  _id: string
  name: string
  email: string
  mobileNumber: number
  status: QUERY_STATUS
  createdAt: string
}

export enum QUERY_KEYS {
  GET_QUERIES = 'GET_QUERIES'
}
