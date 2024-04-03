import { Button } from '@/components/atoms/button'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { StarIcon } from '@heroicons/react/20/solid'

export const TrekPlannerDetailsComponent = () => {
  return (
    <Container className="space-y-2">
      <Text
        as="h2"
        className="text-sm title-font text-gray-500 tracking-widest"
      >
        BEACH NAME
      </Text>
      <Text
        as="h1"
        className="text-gray-900 text-3xl title-font font-medium mb-1 dark:text-gray-400"
      >
        The Catcher in the Rye
      </Text>
      <Container className="flex mb-4">
        <Text className="flex items-center">
          <StarIcon className="w-4 h-4 text-[#f68a1e]" />
          <Text className="text-gray-600 ml-3">4 Reviews</Text>
        </Text>
      </Container>
      <Text as="p" className="leading-relaxed dark:text-gray-600">
        Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha
        taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole
        raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric.
        Gastropub blue bottle austin listicle pour-over, neutra jean shorts
        keytar banjo tattooed umami cardigan.
      </Text>
      <Container className="flex justify-between items-center">
        <Text className="title-font font-medium text-2xl text-gray-900">
          Himachal
        </Text>
        <Button btnText="Book" />
      </Container>
    </Container>
  )
}
