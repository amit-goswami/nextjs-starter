import { Text } from '@/components/atoms/text'
import { Container } from '@/components/atoms/container'
import { IQuery } from '../../queries.interface'

type AccordionTitleProps = {
  query: IQuery
}

export const AccordionTitle = ({ query }: AccordionTitleProps) => {
  return (
    <Container className="flex items-baseline justify-center space-x-1">
      <Text className="text-lg font-medium text-gray-800 dark:text-gray-400">
        {query.name}
      </Text>
      <Text className="text-sm font-normal text-gray-600 dark:text-gray-200">
        {query.email}
      </Text>
    </Container>
  )
}
