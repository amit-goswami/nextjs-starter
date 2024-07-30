import useTransformRecentTreks from '../../hooks/useTransformRecentTreks'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import {
  IPaymentHistory,
  IProfileDetails,
  IRecentTrek
} from '../../user.interface'
import { BookingHistoryTable } from './booking-history-table'
import { SelectedRowDetails } from './selected-row-details'
import { useUserManagementStore } from '../../store/user.store'
import { useGetBookings } from '../../hooks/useGetBookings'

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
  const {
    showTable,
    selectedRowDetails,
    priceBreakdown,
    paymentHistoryData,
    selectedPathRoute,
    setSelectedRowDetails,
    setShowTable,
    setPriceBreakdown,
    setPaymentHistoryData,
    setSelectedPathRoute
  } = useUserManagementStore()

  const recentTreksList = useTransformRecentTreks(selectedPathRoute)
  const { bookingTableData } = useGetBookings()

  return (
    <Container>
      <Text className="text-2xl font-bold">Booking History</Text>
      <Container className="mt-3">
        {showTable && (
          <BookingHistoryTable
            paymentHistory={paymentHistory}
            bookingTableData={bookingTableData}
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
