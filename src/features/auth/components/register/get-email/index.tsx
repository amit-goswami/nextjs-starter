import Joi from 'joi'
import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'

const getOtpSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email'
    })
})

type GetEmailProps = {
  setEmail: (data: Record<string, string | number | boolean>) => void
  setIsGetOtpClicked: (data: boolean) => void
}

export const GetEmail = ({ setEmail, setIsGetOtpClicked }: GetEmailProps) => {
  const handleGetOtp = (data: Record<string, string | number | boolean>) => {
    console.log(data)
    setEmail(data)
    setIsGetOtpClicked(true)
  }

  return (
    <Form
      validationSchema={getOtpSchema}
      initialValues={{}}
      getFormData={(data) => handleGetOtp(data)}
    >
      <Container className="flex flex-col gap-2 mb-4">
        <FormInput
          label="Enter the Email to get OTP"
          name="email"
          type="email"
        />
      </Container>
      <Button btnText="Get OTP" />
    </Form>
  )
}
