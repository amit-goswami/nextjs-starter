import Joi from 'joi'
import toast from 'react-hot-toast'
import AuthService from '@/features/auth/auth.service'
import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'
import { USER_TYPE } from '@/features/user/user.interface'
import { ICreateUserPayload, LOGIN_ALERT } from '@/features/auth/auth.interface'
import { useLocalStorage } from '@/features/shared/hooks/useLocalStorage'
import {
  AUTH_MESSAGE,
  LOCAL_STORAGE_KEYS,
  ROUTES
} from '@/features/shared/shared.interface'
import { useRouter } from 'next/navigation'

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
  const { setItem: setToken } = useLocalStorage(LOCAL_STORAGE_KEYS.TOKEN)
  const { setItem: setUsername } = useLocalStorage(LOCAL_STORAGE_KEYS.USERNAME)
  const { setItem: setUsertype } = useLocalStorage(LOCAL_STORAGE_KEYS.USERTYPE)

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
    const response: any = await AuthService.createUser(
      createRegistrationPayload
    )
    if (
      response.user.token &&
      response.user.username &&
      response.user.user_type
    ) {
      toast.success(AUTH_MESSAGE.USER_LOGGED_IN)
      setToken(response.user.token)
      setUsername(response.user.username)
      setUsertype(response.user.user_type)
      return router.push(ROUTES.HOME)
    }
    if (response.errors) return LOGIN_ALERT.USER_NOT_CREATED
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
