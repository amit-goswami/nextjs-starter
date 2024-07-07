import Joi from 'joi'
import { Container } from '@/components/atoms/container'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'
import { IBookingHistoryDetails } from '@/features/user/user.interface'

type TrekDetailsFormProps = {
  selectedRowDetails: IBookingHistoryDetails
}

const formValidationSchema = Joi.object({
  sourceLocation: Joi.string().required(),
  destinationLocation: Joi.string().required(),
  startDate: Joi.string().required(),
  endDate: Joi.string().required(),
  trekName: Joi.string().required(),
  email: Joi.string().required(),
  contactNumber: Joi.string().required(),
  price: Joi.string().required()
})

export const TrekDetailsForm = ({
  selectedRowDetails
}: TrekDetailsFormProps) => {
  const initialFormValues = {
    sourceLocation: selectedRowDetails?.sourceLocation,
    destinationLocation: selectedRowDetails?.destinationLocation,
    startDate: selectedRowDetails?.startDate,
    endDate: selectedRowDetails?.endDate,
    trekName: selectedRowDetails?.trekName,
    email: selectedRowDetails?.email,
    contactNumber: selectedRowDetails?.contactNumber,
    price: selectedRowDetails?.price
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
      </Container>
    </Form>
  )
}
