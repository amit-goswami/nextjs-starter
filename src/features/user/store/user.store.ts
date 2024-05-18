import { create } from 'zustand'

type UserManagementStore = {
  isEditProfileModalOpen: boolean
  setIsEditProfileModalOpen: (isEditProfileModalOpen: boolean) => void
}

export const useUserManagementStore = create<UserManagementStore>((set) => ({
  isEditProfileModalOpen: false,
  setIsEditProfileModalOpen: (isEditProfileModalOpen) =>
    set({ isEditProfileModalOpen })
}))
