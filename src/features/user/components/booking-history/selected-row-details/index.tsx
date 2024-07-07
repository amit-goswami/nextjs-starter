import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import {
  IBookingHistoryDetails,
  IOtherPrices,
  IPaymentHistory
} from '@/features/user/user.interface'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { TrekDetailsForm } from '../trek-details-form'
import { SelectedRowTimeline } from '../selected-row-timeline'
import { IReturnRecentTreksList } from '@/features/user/hooks/useTransformRecentTreks'

type SelectedRowDetailsProps = {
  priceBreakdown: IOtherPrices[]
  paymentHistoryData: IPaymentHistory[]
  selectedRowDetails: IBookingHistoryDetails | {}
  recentTreksList: IReturnRecentTreksList[]
  setShowTable: (value: boolean) => void
}

export const SelectedRowDetails = ({
  priceBreakdown,
  paymentHistoryData,
  selectedRowDetails,
  recentTreksList,
  setShowTable
}: SelectedRowDetailsProps) => {
  return (
    <Container>
      <Button btnText="Show Table" onClick={() => setShowTable(true)} />
      <Container className="flex space-x-2 flex-col sm:flex-row items-start justify-center gap-4 mt-3">
        <Container className="flex items-center justify-center flex-col pb-4 w-full sm:w-1/2 space-y-4">
          <TrekDetailsForm
            selectedRowDetails={selectedRowDetails as IBookingHistoryDetails}
          />
        </Container>
        <Container className="flex flex-col items-start gap-2 w-1/2">
          <SelectedRowTimeline recentTreksList={recentTreksList} />
        </Container>
      </Container>
      <Container className="mt-3">
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
      </Container>
      <Container className="mt-3">
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
          <Column field="cashFreeOrder.created_at" header="Created At" />
        </DataTable>
      </Container>
    </Container>
  )
}
