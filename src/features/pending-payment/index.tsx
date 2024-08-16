'use client'

import { Container } from '@/components/atoms/container'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { useGetPaymentRedirect } from './hooks/useGetPaymentRedirect'
import { useParams } from 'next/navigation'
import { Loader } from '@/components/molecules/loader'
import { Button } from '@/components/atoms/button'
import { pendingPaymentService } from './pending-payment.service'
import { Text } from '@/components/atoms/text'
import { IRouteParams } from '../shared/shared.interface'

type PendingPaymentPage = {}

export const PendingPayment: React.FC<PendingPaymentPage> = ({}) => {
  const { id } = useParams<IRouteParams>()
  const { data, isLoading } = useGetPaymentRedirect(id)

  const handlePayNow = async () =>
    await pendingPaymentService.handlePendingPayment(id)

  if (isLoading) {
    return <Loader />
  }

  return (
    <BackGroundDiv>
      <Container className="w-full relative mx-auto px-4 sm:px-8 py-3 h-[calc(100vh-152px)] overflow-y-scroll">
        <Container>
          <Container className="px-4 sm:px-0">
            <Text
              as="h3"
              className="text-base font-semibold leading-7 text-gray-900"
            >
              Payment Information
            </Text>
          </Container>
          <Container className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <Container className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Email
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {data?.email}
                </dd>
              </Container>
              <Container className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Start Location
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {data?.sourceLocation}
                </dd>
              </Container>
              <Container className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Destination
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {data?.destinationLocation}
                </dd>
              </Container>
              <Container className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Contact Number
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {data?.contactNumber}
                </dd>
              </Container>
              <Container className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Trek Name
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {data?.trek.trek_name}
                </dd>
              </Container>
              <Container className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Estimate Price
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  ₹ {data?.price} /-
                </dd>
              </Container>
              <Container className="px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Advance booking Amount
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  ₹ {data?.advanceBooking} /-
                </dd>
              </Container>
            </dl>
            <Container className="my-4">
              <Button btnText="Pay Now" onClick={() => handlePayNow()} />
            </Container>
          </Container>
        </Container>
      </Container>
    </BackGroundDiv>
  )
}
