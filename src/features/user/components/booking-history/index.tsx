import useTransformRecentTreks from '../../hooks/useTransformRecentTreks'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { useEffect, useState } from 'react'
import {
  IPaymentHistory,
  IProfileDetails,
  IRecentTrek
} from '../../user.interface'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import userService from '../../user.service'
import { Timeline } from 'primereact/timeline'
import { customizedContent, customizedMarker } from '../../utils'

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
  const [selectedRowDetails, setSelectedRowDetails] = useState<any>({})
  const [paymentHistoryData, setPaymentHistoryData] = useState<any>([])
  const [booking, setBooking] = useState<any>([])
  const [selectedPathRoute, setSelectedPathRoute] = useState<any>([])
  const [priceBreakdown, setPriceBreakdown] = useState<any>([])

  const recentTreksList = useTransformRecentTreks(selectedPathRoute)

  const fetchBooking = async () => {
    try {
      const response = await userService.bookingHistory()
      // response.sort(
      //   (a: any, b: any) => new Date(b.createdAt) - new Date(a.createdAt)
      // )
      const modifiedResponse = response.map((element: any) => {
        if (element.createdAt) {
          return { ...element }
        }
        return element
      })
      setBooking(modifiedResponse)
    } catch (err) {
      console.log(err)
    }
  }

  const getPaymentHistoryData = (value: any) => {
    const { _id } = value
    const filteredData =
      paymentHistory?.filter?.((element) => element?.trekRequest === _id) || []
    const pathRoute =
      booking?.find((element: any) => element?._id === _id)?.pathRoutes || []
    const priceBreakdownData =
      booking?.find((element: any) => element?._id === _id)?.otherPrices || []
    setPriceBreakdown(priceBreakdownData)
    setSelectedPathRoute(pathRoute)
    setPaymentHistoryData(filteredData)
  }

  useEffect(() => {
    fetchBooking()
  }, [])

  return (
    <Container>
      <Text className="text-2xl font-bold">Booking History</Text>
      <Container>
        {showTable && (
          <DataTable
            value={booking}
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
        )}
        {!showTable && (
          <div
            style={{
              backgroundColor: '#f5f5f5',
              border: '1px solid #e0e0e0',
              padding: '1rem',
              borderRadius: '0.5rem'
            }}
          >
            <div onClick={() => setShowTable(true)}>
              <span className="flex justify-content-start align-content-center gap-2">
                <i
                  className="pi pi-arrow-left"
                  style={{
                    color: '#183c7d',
                    marginTop: '-2px'
                  }}
                />
              </span>
            </div>
            <div className="booking-history-container">
              <div className="booking-history-sub-container flex align-items-start flex-1">
                <div className="flex align-items-start flex-column w-full h-100">
                  <h4 className="text-center text-secondary m-2">
                    Source Location : {selectedRowDetails?.sourceLocation}
                  </h4>
                  <h4 className="text-center text-secondary m-2">
                    Destination Location :{' '}
                    {selectedRowDetails?.destinationLocation}
                  </h4>
                  <h4 className="text-center text-secondary m-2">
                    Start Date : {selectedRowDetails?.startDate}
                  </h4>
                  <h4 className="text-center text-secondary m-2">
                    End Date : {selectedRowDetails?.endDate}
                  </h4>
                  <h4 className="text-center text-secondary m-2">
                    Trek Name : {selectedRowDetails?.trek?.trek_name}
                  </h4>
                  <h4 className="text-center text-secondary m-2">
                    Email : {selectedRowDetails?.email}
                  </h4>
                  <h4 className="text-center text-secondary m-2">
                    Contact Number : {selectedRowDetails?.contactNumber}
                  </h4>
                  <h4 className="text-center text-secondary m-2">
                    Trek Price : {selectedRowDetails?.price}
                  </h4>
                </div>
                <div className="w-full">
                  {recentTreksList.length !== 0 && (
                    <Timeline
                      value={recentTreksList}
                      align="left"
                      className="customized-timeline"
                      marker={customizedMarker}
                      content={customizedContent}
                    />
                  )}
                </div>
              </div>
              <div className="payment-history">
                <DataTable
                  value={priceBreakdown}
                  tableStyle={{ minWidth: '50rem' }}
                  metaKeySelection={false}
                  dataKey="description"
                  selectionMode="single"
                >
                  <Column field="description" header="Description" />
                  <Column field="price" header="Price" />
                </DataTable>
              </div>
              <div className="payment-history">
                <DataTable
                  value={paymentHistoryData}
                  tableStyle={{ minWidth: '50rem' }}
                  metaKeySelection={false}
                  dataKey="trekRequest"
                  selectionMode="single"
                >
                  <Column field="cashFreeOrder.cf_order_id" header="Order ID" />
                  <Column field="cashFreeOrder.order_amount" header="Amount" />
                  <Column field="status" header="Status" />
                  <Column
                    field="cashFreeOrder.customer_details.customer_phone"
                    header="Contact No."
                  />
                  <Column
                    field="cashFreeOrder.customer_details.customer_email"
                    header="Email"
                  />
                  <Column
                    field="cashFreeOrder.created_at"
                    header="Created At"
                  />
                </DataTable>
              </div>
            </div>
          </div>
        )}
      </Container>
    </Container>
  )
}
