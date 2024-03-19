import Image from 'next/image'
import { Container } from '@/components/atoms/container'
import { BackGroundDiv } from '../shared/components/BackGroundDiv'
import { Text } from '@/components/atoms/text'
import { Button } from '@/components/atoms/button'
import { StarIcon } from '@heroicons/react/16/solid'

export const TrekPlannerComponent = () => {
  return (
    <BackGroundDiv>
      <Container className="w-full relative mx-auto px-4 sm:px-8 h-[calc(100vh-152px)] overflow-y-scroll">
        <Container className="mx-auto flex flex-wrap">
          <Container className="lg:w-1/2 grid grid-cols-2 grid-rows-6 h-[80vh] relative">
            <Image
              className="row-span-3 object-cover w-full h-full p-2"
              src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80"
              alt="image"
              width={1920}
              height={1080}
            />
            <Image
              className="row-span-2 object-cover w-full h-full p-2"
              src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="image"
              width={1920}
              height={1080}
            />
            <Image
              className="row-span-2 object-cover w-full h-full p-2"
              src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
              alt="image"
              width={1920}
              height={1080}
            />
            <Image
              className="row-span-3 object-cover w-full h-full p-2"
              src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="image"
              width={1920}
              height={1080}
            />
            <Image
              className="row-span-2 object-cover w-full h-full p-2"
              src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80"
              alt="image"
              width={1920}
              height={1080}
            />
            <Container className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-700 opacity-10 rounded-sm" />
          </Container>
          <Container className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <Text
              as="h2"
              className="text-sm title-font text-gray-500 tracking-widest"
            >
              BEACH NAME
            </Text>
            <Text
              as="h1"
              className="text-gray-900 text-3xl title-font font-medium mb-1"
            >
              The Catcher in the Rye
            </Text>
            <Container className="flex mb-4">
              <Text className="flex items-center">
                <StarIcon className="w-4 h-4 text-[#f68a1e]" />
                <Text className="text-gray-600 ml-3">4 Reviews</Text>
              </Text>
            </Container>
            <Text as="p" className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </Text>
            <Container className="flex justify-between items-center">
              <Text className="title-font font-medium text-2xl text-gray-900">
                Himachal
              </Text>
              <Button btnText="Book" />
            </Container>
          </Container>
        </Container>
      </Container>
    </BackGroundDiv>
  )
}
