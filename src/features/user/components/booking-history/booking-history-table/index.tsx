import {
  IBookingHistoryDetails,
  IOtherPrices,
  IPathRoutes,
  IPaymentHistory
} from '@/features/user/user.interface'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Dispatch, SetStateAction } from 'react'

type BookingHistoryTableProps = {
  bookingTableData: IBookingHistoryDetails[]
  paymentHistory: IPaymentHistory[] | null
  setSelectedRowDetails: Dispatch<SetStateAction<{} | IBookingHistoryDetails>>
  setShowTable: Dispatch<SetStateAction<boolean>>
  setPriceBreakdown: Dispatch<SetStateAction<IOtherPrices[]>>
  setSelectedPathRoute: Dispatch<SetStateAction<IPathRoutes[]>>
  setPaymentHistoryData: Dispatch<SetStateAction<IPaymentHistory[]>>
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
    const filteredData =
      paymentHistory?.filter((element) => element?.trekRequest === _id) || []
    const pathRoute =
      bookingTableData?.find((element: any) => element?._id === _id)
        ?.pathRoutes || []
    const priceBreakdownData =
      bookingTableData?.find((element: any) => element?._id === _id)
        ?.otherPrices || []
    setPriceBreakdown(priceBreakdownData)
    setSelectedPathRoute(pathRoute)
    setPaymentHistoryData(filteredData)
  }
  return (
    <DataTable
      value={bookingTableData}
      tableStyle={{ minWidth: '50rem' }}
      onSelectionChange={(e) => {
        setSelectedRowDetails(e.value)
        getPaymentHistoryData(e.value)
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
