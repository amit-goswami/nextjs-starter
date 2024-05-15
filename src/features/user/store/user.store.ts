import { create } from 'zustand'
import { IUserAllDetails } from '../user.interface'

type UserManagementStore = {
  userAllDetails: null | IUserAllDetails
  setUserAllDetails: (userAllDetails: IUserAllDetails) => void
}

export const useUserManagementStore = create<UserManagementStore>((set) => ({
  userAllDetails: null,
  setUserAllDetails: (userAllDetails) => set({ userAllDetails })
}))
