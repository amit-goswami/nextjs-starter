import React from 'react'
import Joi from 'joi'
import { Container } from '@/components/atoms/container'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'
import { Button } from '@/components/atoms/button'
import { XCircleIcon } from '@heroicons/react/20/solid'
import { Text } from '@/components/atoms/text'
import { FormOption } from '@/components/organisms/form/form-option'
import { useClickOutside } from '@/features/shared/hooks/useClickOutSide'
import { useCreateQueryMutation } from '@/features/home/hooks/useCreateQueryMutation'
import { ICreateQueryPayload } from '@/features/home/home.interface'

type EnquireNowFormProps = {
  setIsEnquireNowModalOpen: (isOpen: boolean) => void
}

const validationSchema = Joi.object({
  userName: Joi.string().required(),
  userEmail: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  userMobileNumber: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
  queryType: Joi.string().required()
})

const queryTypeOptions = [
  { value: 'travel', label: 'Travel Queries' },
  { value: 'driver', label: 'Driver Services' },
  { value: 'guide', label: 'Guide Services' }
]

const initialValues = {
  queryType: queryTypeOptions[0].value
}

export const EnquireNowForm: React.FC<EnquireNowFormProps> = ({
  setIsEnquireNowModalOpen
}: EnquireNowFormProps) => {
  const enquireNowFormRef = React.useRef<HTMLDivElement>(null)
  const createQueryMutation = useCreateQueryMutation()

  useClickOutside(enquireNowFormRef, () => {
    setIsEnquireNowModalOpen(false)
  })

  const handleFormSubmit = (
    data: Record<string, string | number | boolean>
  ) => {
    const createQueryPayload = {
      name: data.userName as string,
      email: data.userEmail as string,
      mobileNumber: data.userMobileNumber as number,
      queryType: data.queryType as string
    }
    createQueryMutation.mutate(createQueryPayload)
    setIsEnquireNowModalOpen(false)
  }

  return (
    <div
      ref={enquireNowFormRef}
      className="bg-gray-100 dark:bg-gray-800 p-4 rounded-sm shadow-lg w-full"
    >
      <Form
        validationSchema={validationSchema}
        initialValues={{
          ...initialValues
        }}
        getFormData={handleFormSubmit}
        className="space-y-4"
      >
        <FormInput
          label="Name"
          placeholder="Please enter your name"
          name="userName"
          labelRequired
        />
        <FormInput
          label="Email"
          placeholder="Please enter your email"
          name="userEmail"
          labelRequired
        />
        <FormInput
          label="Mobile Number"
          placeholder="Please enter your Mobile Number"
          name="userMobileNumber"
          type="number"
          labelRequired
        />
        <FormOption
          label="Query Type"
          name="queryType"
          labelRequired
          options={queryTypeOptions}
        />
        <Container className="flex items-center justify-start space-x-2">
          <Container
            className="flex items-center justify-center space-x-1 rounded-full mx-0 px-6 text-base font-semibold leading-7 text-gray-900 hover:bg-brand hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit dark:text-gray-600 dark:ring-gray-600 dark:hover:bg-gray-900/20 duration-200"
            onClick={() => setIsEnquireNowModalOpen(false)}
          >
            <XCircleIcon className="h-5 w-5 text-brand dark:text-gray-600" />
            <Text>Close</Text>
          </Container>
          <Container>
            <Button type="submit" btnText="Submit" />
          </Container>
        </Container>
      </Form>
    </div>
  )
}
