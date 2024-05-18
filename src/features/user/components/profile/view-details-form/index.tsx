import Joi from 'joi'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'
import { Container } from '@/components/atoms/container'

const formValidationSchema = Joi.object({})

type ViewDetailsFormProps = {
  formData: Record<string, any>
}

export const ViewDetailsForm = ({ formData }: ViewDetailsFormProps) => {
  return (
    <Form
      validationSchema={formValidationSchema}
      initialValues={{
        ...formData
      }}
      getFormData={() => {}}
    >
      <Container className="flex flex-wrap gap-2 mb-4 w-full">
        <FormInput
          label="Email"
          name="email"
          type="email"
          className="w-full sm:w-1/4"
          disabled
        />
        <FormInput
          label="Username"
          name="username"
          className="w-full sm:w-1/4"
          disabled
        />
        <FormInput
          label="Birth Date"
          name="birthDate"
          type="date"
          className="w-full sm:w-1/4"
          disabled
        />
        <FormInput
          label="Education Background"
          name="educationBackground"
          className="w-full sm:w-1/4"
          disabled
        />
        <FormInput
          label="Facebook Handle"
          name="fbHandle"
          className="w-full sm:w-1/4"
          disabled
        />
        <FormInput
          label="Government ID"
          name="govId"
          className="w-full sm:w-1/4"
          disabled
        />
        <FormInput
          label="Instagram Handle"
          name="instaHandle"
          className="w-full sm:w-1/4"
          disabled
        />
        <FormInput
          label="Twitter Handle"
          name="tweetHandle"
          className="w-full sm:w-1/4"
          disabled
        />
        <FormInput
          label="Weight"
          name="weight"
          className="w-full sm:w-1/4"
          disabled
        />
      </Container>
    </Form>
  )
}
