import { IRecentTrek } from '../../user.interface'
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'

type PaymentHistoryDetailsComponentProps = {
  recentTreks: IRecentTrek | null | undefined
}

export const PaymentHistoryDetailsComponent = ({
  recentTreks
}: PaymentHistoryDetailsComponentProps) => {
  return (
    <Container>
      <Text className="text-2xl font-bold">Payment History</Text>
      <Container className="mt-3">
        <DataTable
          value={recentTreks?.otherPrices || []}
          metaKeySelection={false}
          dataKey="description"
          selectionMode="single"
        >
          <Column field="description" header="Description" />
          <Column field="price" header="Price" />
        </DataTable>
      </Container>
    </Container>
  )
}
