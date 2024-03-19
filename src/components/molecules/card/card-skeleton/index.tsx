import { Container } from '@/components/atoms/container'

export const CardSkeleton = () => {
  return (
    <Container className="bg-transparent rounded-sm overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all">
      <Container className="w-full aspect-w-16 aspect-h-8 lg:h-80 animate-pulse">
        <Container className="h-full w-full bg-gray-300"></Container>
      </Container>
      <Container className="p-6">
        <Container className="text-lg font-bold text-gray-800 h-6 bg-gray-300 rounded"></Container>
        <Container className="text-sm text-gray-600 h-4 mt-2 bg-gray-300 rounded"></Container>
        <Container className="mt-4 flex items-center justify-between flex-wrap gap-2">
          <Container className="text-sm text-gray-700 h-4 bg-gray-300 rounded"></Container>
          <Container className="flex items-center space-x-1">
            <Container className="h-4 w-4 bg-[#f68a1e] rounded-full"></Container>
            <Container className="text-sm text-gray-700 h-4 bg-gray-300 rounded"></Container>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}
