import Joi from 'joi'
import { Container } from '@/components/atoms/container'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'
import { IRecentTrek } from '@/features/user/user.interface'
import { Button } from '@/components/atoms/button'
import { RenderRecentTreksAction } from '../payment-button-type'

type UpcomingTrekDetailsProps = {
  recentTreks: IRecentTrek | null | undefined
}

const formValidationSchema = Joi.object({
  sourceLocation: Joi.string().required(),
  destinationLocation: Joi.string().required(),
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
  trekName: Joi.string().required(),
  email: Joi.string().required(),
  contactNumber: Joi.string().required(),
  price: Joi.number().required(),
  totalAmount: Joi.number().required(),
  paidAmount: Joi.number().required(),
  remainingAmount: Joi.number().required()
})

export const UpcomingTrekDetails = ({
  recentTreks
}: UpcomingTrekDetailsProps) => {
  const initialFormValues = {
    sourceLocation: recentTreks?.sourceLocation,
    destinationLocation: recentTreks?.destinationLocation,
    startDate: recentTreks?.startDate,
    endDate: recentTreks?.endDate,
    trekName: recentTreks?.trek?.trek_name,
    email: recentTreks?.email,
    contactNumber: recentTreks?.contactNumber,
    price: recentTreks?.price,
    totalAmount: recentTreks?.totalAmount,
    paidAmount: recentTreks?.paidAmount,
    remainingAmount:
      Number(recentTreks?.totalAmount) - Number(recentTreks?.paidAmount)
  } as Record<string, any>
  return (
    <Form
      initialValues={{
        ...initialFormValues
      }}
      validationSchema={formValidationSchema}
      getFormData={() => {}}
    >
      <Container className="flex flex-wrap gap-2 mb-4 w-full">
        <Container className="flex gap-2 w-full">
          <FormInput
            label="Source Location"
            name="sourceLocation"
            type="text"
            className="w-1/2"
            disabled={true}
          />
          <FormInput
            label="Destination Location"
            name="destinationLocation"
            className="w-1/2"
            type="text"
            disabled={true}
          />
        </Container>
        <Container className="flex gap-2 w-full">
          <FormInput
            label="Start Date"
            name="startDate"
            className="w-1/2"
            type="text"
            disabled={true}
          />
          <FormInput
            label="End Date"
            name="endDate"
            className="w-1/2"
            type="text"
            disabled={true}
          />
        </Container>
        <Container className="flex gap-2 w-full">
          <FormInput
            label="Trek Name"
            name="trekName"
            className="w-1/2"
            type="text"
            disabled={true}
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            className="w-1/2"
            disabled={true}
          />
        </Container>
        <Container className="flex gap-2 w-full">
          <FormInput
            label="Contact Number"
            name="contactNumber"
            className="w-1/2"
            type="text"
            disabled={true}
          />
          <FormInput
            label="Price"
            name="price"
            className="w-1/2"
            type="text"
            disabled={true}
          />
        </Container>
        <Container className="flex gap-2 w-full">
          <FormInput
            label="Total Amount"
            name="totalAmount"
            className="w-1/2"
            type="text"
            disabled={true}
          />
          <FormInput
            label="Paid Amount"
            name="paidAmount"
            className="w-1/2"
            type="text"
            disabled={true}
          />
        </Container>
        <FormInput
          label="Remaining Amount"
          name="remainingAmount"
          className="w-1/2"
          type="text"
          disabled={true}
        />
      </Container>
      <RenderRecentTreksAction recentTreks={recentTreks} />
    </Form>
  )
}
