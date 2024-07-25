import { Text } from '@/components/atoms/text'

type EmptyDataProps<T> = {
  column: T[]
}

export const EmptyData = <T,>({ column }: EmptyDataProps<T>) => {
  return (
    <tbody>
      <tr
        style={{
          height: '100%'
        }}
      >
        <td colSpan={column.length}>
          <Text>Oops! No Results Found</Text>
        </td>
      </tr>
    </tbody>
  )
}
