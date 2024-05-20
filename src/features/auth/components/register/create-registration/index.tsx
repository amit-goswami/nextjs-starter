import Joi from 'joi'
import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'

const registerSchema = Joi.object({
  OTP: Joi.string().pattern(new RegExp('^[0-9]{4}$')).required().messages({
    'string.empty': 'OTP is required',
    'string.pattern.base': 'Please enter a valid 4-digit OTP'
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 6 characters'
  })
})

type CreateRegistrationProps = {
  email: Record<string, string | number | boolean> | undefined
}

export const CreateRegistration = ({ email }: CreateRegistrationProps) => {
  const handleCreateRegistration = (
    data: Record<string, string | number | boolean>
  ) => {
    if (!email) return null
    const createRegistrationPayload = {
      email: email.email,
      OTP: data.OTP,
      password: data.password
    }
    console.log(createRegistrationPayload)
  }
  return (
    <Form
      validationSchema={registerSchema}
      initialValues={{}}
      getFormData={(data) => handleCreateRegistration(data)}
    >
      <Container className="flex flex-col gap-2 mb-4">
        <FormInput
          label="Enter the OTP sent to your mail"
          name="OTP"
          type="string"
        />
        <FormInput label="Password" name="password" type="password" />
      </Container>
      <Button btnText="Register" />
    </Form>
  )
}
