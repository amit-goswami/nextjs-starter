import React from 'react'
import userService from '../user.service'
import { IBookingHistoryDetails } from '../user.interface'

export const useGetBookings = () => {
  const [bookingTableData, setBookingTableData] = React.useState<
    IBookingHistoryDetails[]
  >([])
  const fetchBooking = async () => {
    try {
      const response = await userService.bookingHistory()
      const modifiedResponse = response.map((element) => {
        if (element.createdAt) {
          return { ...element }
        }
        return element
      })
      setBookingTableData(modifiedResponse)
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    fetchBooking()
  }, [])

  return { bookingTableData }
}
