'use client'

import Accordion from '@/components/organisms/accordion'
import { Container } from '@/components/atoms/container'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { useGetQueries } from './hooks/useGetQueries'
import { ADMIN } from '@/shared/shared.interface'
import { QueriesLoader } from './components/queries-loader'
import { Query } from './components/query'

export const QueriesComponent = () => {
  const email = ADMIN.EMAIL
  const { isLoading, data } = useGetQueries(email)

  if (isLoading) return <QueriesLoader />
  return (
    <BackGroundDiv>
      <Container className="w-full relative mx-auto px-4 sm:px-8 py-3 h-[calc(100vh-152px)] overflow-y-scroll">
        <Container className="p-4">
          {data?.map((query) => {
            const title = `${query.name} ${query.email}`
            return (
              <Accordion title={title} key={query._id}>
                <Query query={query} />
              </Accordion>
            )
          })}
        </Container>
      </Container>
    </BackGroundDiv>
  )
}
