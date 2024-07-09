'use client'

import Image from 'next/image'
import { Container } from '@/components/atoms/container'
import { FileUpload } from '@/components/organisms/image-upload'
import { IProfileDetails } from '../../user.interface'
import { DetailsForm } from './details-form'
import { Button } from '@/components/atoms/button'
import { useUserManagementStore } from '../../store/user.store'
import { Modal } from '@/components/molecules/modal'

type UserProfileComponentProps = {
  profileDetails: IProfileDetails | null | undefined
}

export const UserProfileComponent = ({
  profileDetails
}: UserProfileComponentProps) => {
  const { isEditProfileModalOpen, setIsEditProfileModalOpen } =
    useUserManagementStore()

  if (!profileDetails) return null

  const formData = {
    bio: profileDetails?.bio,
    birthDate: profileDetails?.birth_date,
    booksRead: profileDetails?.books_read,
    educationBackground: profileDetails?.education_background,
    email: profileDetails?.email,
    fbHandle: profileDetails?.fb_handle,
    govId: profileDetails?.gov_id,
    image: profileDetails?.image,
    instaHandle: profileDetails?.insta_handle,
    musicInterest: profileDetails?.music_interest,
    tweetHandle: profileDetails?.tweet_handle,
    username: profileDetails?.username,
    weight: profileDetails?.weight
  } as Record<string, any>

  return (
    <Container>
      {profileDetails && (
        <Container className="flex space-x-2 flex-col sm:flex-row items-start justify-center gap-4">
          <Container className="flex items-center justify-center flex-col pb-4 w-full sm:w-1/4 space-y-4">
            <Image
              className="w-32 h-32 rounded-full overflow-hidden object-cover border-2 border-primary-500"
              src={'/assets/hero.jpg'}
              alt="profile picture"
              width={128}
              height={128}
            />
            <Button
              btnText="Edit Profile"
              onClick={() => setIsEditProfileModalOpen(true)}
            />
            <FileUpload btnLabel="Upload Profile Image" className="w-max" />
          </Container>
          <DetailsForm formData={formData} disabled={true} />
        </Container>
      )}
      {isEditProfileModalOpen && (
        <Modal
          title="Edit Profile"
          isOpen={isEditProfileModalOpen}
          onClose={() => setIsEditProfileModalOpen(false)}
          content={<DetailsForm formData={formData} />}
        />
      )}
    </Container>
  )
}
