import Joi from 'joi'
import toast from 'react-hot-toast'
import userService from '@/features/user/user.service'
import { Form } from '@/components/organisms/form'
import { FormInput } from '@/components/organisms/form/form-input'
import { Container } from '@/components/atoms/container'
import { Button } from '@/components/atoms/button'
import { useUserManagementStore } from '@/features/user/store/user.store'
import { USER_PROFILE_TOAST_MESSAGE } from '@/features/user/user.interface'
import { HTTP_STATUS_CODE } from '@/features/shared/shared.interface'

const formValidationSchema = Joi.object({
  bio: Joi.string().allow(null, ''),
  birthDate: Joi.string().allow(null, ''),
  booksRead: Joi.string().allow(null, ''),
  educationBackground: Joi.string().allow(null, ''),
  email: Joi.string().required(),
  fbHandle: Joi.string().allow(null, ''),
  govId: Joi.string().allow(null, ''),
  image: Joi.string().allow(null, ''),
  instaHandle: Joi.string().allow(null, ''),
  musicInterest: Joi.string().allow(null, ''),
  tweetHandle: Joi.string().allow(null, ''),
  userType: Joi.string().allow(null, ''),
  username: Joi.string().required(),
  weight: Joi.number().allow(null, '')
})

type DetailsFormProps = {
  formData: Record<string, any>
  disabled?: boolean
}

export const DetailsForm = ({
  formData,
  disabled = false
}: DetailsFormProps) => {
  const { setIsEditProfileModalOpen } = useUserManagementStore()

  const handleSubmitForm = async (data: Record<string, any>) => {
    const updateUserDetailsPayload = {
      birth_date: data.birthDate,
      gov_id: data.govId,
      education_background: data.educationBackground,
      weight: data.weight,
      insta_handle: data.instaHandle,
      fb_handle: data.fbHandle,
      tweet_handle: data.tweetHandle,
      music_interest: data.musicInterest,
      books_read: data.booksRead,
      username: data.username
    }
    const { response } = await userService.updateUserProfile(
      updateUserDetailsPayload
    )
    if (response.status === HTTP_STATUS_CODE.OK) {
      toast.success(USER_PROFILE_TOAST_MESSAGE.PROFILE_UPDATED)
      setIsEditProfileModalOpen(false)
    }
  }
  return (
    <Form
      validationSchema={formValidationSchema}
      initialValues={{
        ...formData
      }}
      getFormData={(data) => handleSubmitForm(data)}
    >
      <Container className="flex flex-wrap gap-2 mb-4 w-full">
        <FormInput
          label="Email"
          name="email"
          type="email"
          className="w-full"
          disabled
        />
        <FormInput
          label="Username"
          name="username"
          className="w-full"
          disabled={disabled}
        />
        <FormInput
          label="Birth Date"
          name="birthDate"
          type="date"
          className="w-full"
          disabled={disabled}
        />
        <FormInput
          label="Education Background"
          name="educationBackground"
          className="w-full"
          disabled={disabled}
        />
        <FormInput
          label="Facebook Handle"
          name="fbHandle"
          className="w-full"
          disabled={disabled}
        />
        <FormInput
          label="Government ID"
          name="govId"
          className="w-full"
          disabled={disabled}
        />
        <FormInput
          label="Instagram Handle"
          name="instaHandle"
          className="w-full"
          disabled={disabled}
        />
        <FormInput
          label="Twitter Handle"
          name="tweetHandle"
          className="w-full"
          disabled={disabled}
        />
        <FormInput
          label="Weight"
          name="weight"
          className="w-full"
          disabled={disabled}
        />
        {!disabled && (
          <Container className="mt-4">
            <Button btnText="Submit" type="submit" />
          </Container>
        )}
      </Container>
    </Form>
  )
}
