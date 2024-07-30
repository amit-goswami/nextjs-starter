import { create } from 'zustand'
import {
  IBookingHistoryDetails,
  IOtherPrices,
  IPathRoutes,
  IPaymentHistory
} from '../user.interface'

type UserManagementStore = {
  isEditProfileModalOpen: boolean
  showTable: boolean
  selectedRowDetails: IBookingHistoryDetails | {}
  paymentHistoryData: IPaymentHistory[] | []
  selectedPathRoute: IPathRoutes[] | []
  priceBreakdown: IOtherPrices[] | []
  setSelectedRowDetails: (
    selectedRowDetails: IBookingHistoryDetails | {}
  ) => void
  setPriceBreakdown: (priceBreakdown: IOtherPrices[]) => void
  setShowTable: (showTable: boolean) => void
  setIsEditProfileModalOpen: (isEditProfileModalOpen: boolean) => void
  setPaymentHistoryData: (paymentHistoryData: IPaymentHistory[]) => void
  setSelectedPathRoute: (selectedPathRoute: IPathRoutes[]) => void
}

export const useUserManagementStore = create<UserManagementStore>((set) => ({
  isEditProfileModalOpen: false,
  showTable: true,
  selectedRowDetails: {},
  paymentHistoryData: [],
  selectedPathRoute: [],
  priceBreakdown: [],
  setSelectedRowDetails: (selectedRowDetails) => set({ selectedRowDetails }),
  setShowTable: (showTable) =>
    set({
      showTable
    }),
  setPriceBreakdown: (priceBreakdown) => set({ priceBreakdown }),
  setIsEditProfileModalOpen: (isEditProfileModalOpen) =>
    set({ isEditProfileModalOpen }),
  setPaymentHistoryData: (paymentHistoryData) => set({ paymentHistoryData }),
  setSelectedPathRoute: (selectedPathRoute) => set({ selectedPathRoute })
}))
