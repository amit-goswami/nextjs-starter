import Joi from 'joi'
import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'
import { USER_TYPE } from '@/features/user/user.interface'
import { ICreateUserPayload, LOGIN_ALERT } from '@/features/auth/auth.interface'
import { ROUTES } from '@/features/shared/shared.interface'
import { useRouter } from 'next/navigation'
import { useFirebaseAuth } from '@/providers/AuthProvider'

const registerSchema = Joi.object({
  OTP: Joi.string().pattern(new RegExp('^[0-9]{6}$')).required().messages({
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
  const router = useRouter()
  const { registerUser } = useFirebaseAuth()

  const handleCreateRegistration = async (
    data: Record<string, string | number | boolean>
  ) => {
    if (!email) return null
    const createRegistrationPayload = {
      email: email.email,
      otp: data.OTP,
      password: data.password,
      username: email.email,
      usertype: USER_TYPE.CUSTOMER
    } as ICreateUserPayload

    const response = registerUser(createRegistrationPayload)
    if (!response) return LOGIN_ALERT.USER_NOT_CREATED
    return router.push(ROUTES.HOME)
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
