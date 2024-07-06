'use client'

import Image from 'next/image'
import { Container } from '@/components/atoms/container'
import { FileUpload } from '@/components/organisms/image-upload'
import { IUserAllDetails } from '../../user.interface'
import { DetailsForm } from './details-form'
import { Button } from '@/components/atoms/button'
import { useUserManagementStore } from '../../store/user.store'
import { Modal } from '@/components/molecules/modal'

type UserProfileComponentProps = {
  userDetails: IUserAllDetails | null | undefined
}

export const UserProfileComponent = ({
  userDetails
}: UserProfileComponentProps) => {
  const { isEditProfileModalOpen, setIsEditProfileModalOpen } =
    useUserManagementStore()

  if (!userDetails?.profileDetails) return null

  const formData = {
    bio: userDetails?.profileDetails?.bio,
    birthDate: userDetails?.profileDetails?.birth_date,
    booksRead: userDetails?.profileDetails?.books_read,
    educationBackground: userDetails?.profileDetails?.education_background,
    email: userDetails?.profileDetails?.email,
    fbHandle: userDetails?.profileDetails?.fb_handle,
    govId: userDetails?.profileDetails?.gov_id,
    image: userDetails?.profileDetails?.image,
    instaHandle: userDetails?.profileDetails?.insta_handle,
    musicInterest: userDetails?.profileDetails?.music_interest,
    tweetHandle: userDetails?.profileDetails?.tweet_handle,
    username: userDetails?.profileDetails?.username,
    weight: userDetails?.profileDetails?.weight
  } as Record<string, any>

  return (
    <Container>
      {userDetails && (
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
            <FileUpload btnLabel="Upload Profile Image" />
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
