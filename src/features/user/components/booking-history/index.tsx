import userService from '../../user.service'
import useTransformRecentTreks from '../../hooks/useTransformRecentTreks'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { useEffect, useState } from 'react'
import {
  IBookingHistoryDetails,
  IOtherPrices,
  IPathRoutes,
  IPaymentHistory,
  IProfileDetails,
  IRecentTrek
} from '../../user.interface'
import { BookingHistoryTable } from './booking-history-table'
import { SelectedRowDetails } from './selected-row-details'

type BookingHistoryComponentProps = {
  userDetails: IProfileDetails | undefined | null
  recentTreks: IRecentTrek | undefined | null
  paymentHistory: IPaymentHistory[] | null
}

export const BookingHistoryComponent = ({
  userDetails,
  recentTreks,
  paymentHistory
}: BookingHistoryComponentProps) => {
  const [showTable, setShowTable] = useState(true)
  const [selectedRowDetails, setSelectedRowDetails] = useState<
    IBookingHistoryDetails | {}
  >({})
  const [paymentHistoryData, setPaymentHistoryData] = useState<
    IPaymentHistory[]
  >([])
  const [bookingTableData, setBookingTableData] = useState<
    IBookingHistoryDetails[]
  >([])
  const [selectedPathRoute, setSelectedPathRoute] = useState<IPathRoutes[]>([])
  const [priceBreakdown, setPriceBreakdown] = useState<IOtherPrices[]>([])

  const recentTreksList = useTransformRecentTreks(selectedPathRoute)

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

  useEffect(() => {
    fetchBooking()
  }, [])

  return (
    <Container>
      <Text className="text-2xl font-bold">Booking History</Text>
      <Container className="mt-3">
        {showTable && (
          <BookingHistoryTable
            bookingTableData={bookingTableData}
            paymentHistory={paymentHistory}
            setSelectedRowDetails={setSelectedRowDetails}
            setShowTable={setShowTable}
            setPriceBreakdown={setPriceBreakdown}
            setSelectedPathRoute={setSelectedPathRoute}
            setPaymentHistoryData={setPaymentHistoryData}
          />
        )}
        {!showTable && (
          <SelectedRowDetails
            priceBreakdown={priceBreakdown}
            paymentHistoryData={paymentHistoryData}
            selectedRowDetails={selectedRowDetails}
            recentTreksList={recentTreksList}
            setShowTable={setShowTable}
          />
        )}
      </Container>
    </Container>
  )
}
