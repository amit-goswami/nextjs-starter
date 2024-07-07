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
import { Input } from '@/components/atoms/input'

const registerSchema = Joi.object({
  OTP: Joi.string().pattern(new RegExp('^[0-9]{6}$')).required().messages({
    'string.empty': 'OTP is required',
    'string.pattern.base': 'Please enter a valid 6-digit OTP'
  }),
  password: Joi.string().min(6).required().messages({
    'string.empty': 'Password is required',
    'string.min': 'Password must be at least 6 characters'
  }),
  confirmPassword: Joi.any()
    .equal(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'Passwords do not match' })
})

type CreateRegistrationProps = {
  email: Record<string, string | number | boolean> | null
  setIsGetOtpClicked: (isClicked: boolean) => void
}

export const CreateRegistration = ({
  email,
  setIsGetOtpClicked
}: CreateRegistrationProps) => {
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
    const response = await registerUser(createRegistrationPayload)
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
        <Input
          label="Email"
          value={email?.email as string}
          name="Email"
          disabled
        />
        <FormInput
          label="Enter the OTP sent to your mail"
          name="OTP"
          type="string"
        />
        <FormInput label="Password" name="password" type="password" />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
        />
      </Container>
      <Container className="flex gap-2">
        <Button btnText="Register" />
        <Button
          btnText="Edit Email"
          onClick={() => setIsGetOtpClicked(false)}
        />
      </Container>
    </Form>
  )
}
