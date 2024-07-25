import { IUser } from '../auth.interface'

export interface IResponse {
  message: string
  user: IUser
}

export const useCreateUserMutation = () => {}
