import {
  IBookingHistoryDetails,
  IOtherPrices,
  IPathRoutes,
  IPaymentHistory
} from '@/features/user/user.interface'
import { filterDataWithID } from '@/features/user/utils'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'

type BookingHistoryTableProps = {
  bookingTableData: IBookingHistoryDetails[]
  paymentHistory: IPaymentHistory[] | null
  setShowTable: (showTable: boolean) => void
  setSelectedRowDetails: (selectedRowDetails: IBookingHistoryDetails) => void
  setPriceBreakdown: (priceBreakdown: IOtherPrices[]) => void
  setSelectedPathRoute: (selectedPathRoute: IPathRoutes[]) => void
  setPaymentHistoryData: (paymentHistoryData: IPaymentHistory[]) => void
}

export const BookingHistoryTable = ({
  bookingTableData,
  paymentHistory,
  setSelectedRowDetails,
  setShowTable,
  setPriceBreakdown,
  setSelectedPathRoute,
  setPaymentHistoryData
}: BookingHistoryTableProps) => {
  const getPaymentHistoryData = (value: IBookingHistoryDetails) => {
    const { _id } = value
    const { priceBreakdownData, pathRoute, filteredData } = filterDataWithID(
      _id,
      paymentHistory,
      bookingTableData
    )
    setPriceBreakdown(priceBreakdownData)
    setSelectedPathRoute(pathRoute)
    setPaymentHistoryData(filteredData)
  }

  return (
    <DataTable
      value={bookingTableData}
      tableStyle={{ minWidth: '50rem' }}
      onSelectionChange={(data) => {
        const { value } = data
        setSelectedRowDetails(value)
        getPaymentHistoryData(value)
        setShowTable(false)
      }}
      metaKeySelection={false}
      dataKey="_id"
      selectionMode="single"
    >
      <Column field="trek.trek_name" header="Trek Name" />
      <Column field="startDate" header="Start Date" />
      <Column field="endDate" header="End Date" />
      <Column field="sourceLocation" header="Source Location" />
      <Column field="destinationLocation" header="Destination" />
      <Column field="createdAt" header="Created At" />
    </DataTable>
  )
}
