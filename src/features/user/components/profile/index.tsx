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
  tabsState?: IUserAllDetails
  handleChangeTabs?: (index: number) => void
}

export const UserProfileComponent = ({
  tabsState
}: UserProfileComponentProps) => {
  const { isEditProfileModalOpen, setIsEditProfileModalOpen } =
    useUserManagementStore()

  if (!tabsState?.profileDetails) return null

  const formData = {
    bio: tabsState?.profileDetails?.bio,
    birthDate: tabsState?.profileDetails?.birth_date,
    booksRead: tabsState?.profileDetails?.books_read,
    educationBackground: tabsState?.profileDetails?.education_background,
    email: tabsState?.profileDetails?.email,
    fbHandle: tabsState?.profileDetails?.fb_handle,
    govId: tabsState?.profileDetails?.gov_id,
    image: tabsState?.profileDetails?.image,
    instaHandle: tabsState?.profileDetails?.insta_handle,
    musicInterest: tabsState?.profileDetails?.music_interest,
    tweetHandle: tabsState?.profileDetails?.tweet_handle,
    username: tabsState?.profileDetails?.username,
    weight: tabsState?.profileDetails?.weight
  } as Record<string, any>

  return (
    <Container className="w-full relative mx-auto px-4 sm:px-8 h-[calc(100vh-310px)] overflow-y-scroll">
      {isEditProfileModalOpen && (
        <Modal
          title="Edit Profile"
          isOpen={isEditProfileModalOpen}
          onClose={() => setIsEditProfileModalOpen(false)}
          content={<DetailsForm formData={formData} />}
        />
      )}
      {tabsState && (
        <Container className="flex space-x-2 flex-col sm:flex-row items-start justify-center gap-4">
          <Container className="flex items-center justify-center flex-col pb-4 w-full sm:w-1/2 space-y-4">
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
    </Container>
  )
}
