import { Container } from '@/components/atoms/container'

const Array = [1, 2, 3, 4, 5]

const QueriesSkeleton = () => {
  return (
    <Container className="bg-transparent rounded-sm overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
      <Container className="p-6">
        <Container className="text-lg font-bold text-gray-800 h-6 bg-gray-300 dark:text-gray-800 rounded"></Container>
        <Container className="text-sm text-gray-600 h-4 mt-2 bg-gray-300 dark:text-gray-800 rounded"></Container>
        <Container className="mt-4 flex items-center justify-between flex-wrap gap-2">
          <Container className="text-sm text-gray-700 h-4 bg-gray-300 dark:text-gray-800 rounded"></Container>
          <Container className="flex items-center space-x-1">
            <Container className="h-4 w-4 bg-brand rounded-full"></Container>
            <Container className="text-sm text-gray-700 h-4 bg-gray-300 dark:text-gray-800 rounded"></Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

export const QueriesLoader = () => {
  return (
    <Container className="w-full relative mx-auto px-4 sm:px-8 py-3 h-[calc(100vh-152px)] overflow-y-scroll">
      {Array.map((_, index) => (
        <QueriesSkeleton key={index} />
      ))}
    </Container>
  )
}
