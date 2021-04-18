import { Flex, Text, Stack, Image } from '@chakra-ui/react'
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.min.css'

SwiperCore.use([Navigation, Pagination, A11y, Autoplay])

interface ItemContinent {
  title: string
  subtitle: string
  image: string
}

interface SlideProps {
  arrContinent: ItemContinent[]
}

export function Slide({ arrContinent }: SlideProps) {
  const continent = arrContinent.map((item) => (
    <SwiperSlide key={item.title}>
      <Flex
        w={['100%', '1240px']}
        h={['100%', '450px']}
        bg="gray.400"
        align="center"
        justify="center"
        position="relative"
      >
        <Image
          w="100%"
          h="100%"
          objectFit="cover"
          position="absolute"
          src={item.image}
          alt={`Imagem do continente ${item.title}, com texto ${item.title} ${item.subtitle}`}
        />
        <Stack zIndex="1">
          <Text
            textAlign="center"
            fontWeight="bold"
            color="white"
            fontSize="xxx-large"
          >
            {item.title}
          </Text>
          <Text
            textAlign="center"
            fontWeight="bold"
            color="white"
            fontSize="large"
          >
            {item.subtitle}
          </Text>
        </Stack>
      </Flex>
    </SwiperSlide>
  ))

  return (
    <Flex w="100%" maxW="1240px" h="450px" mx="auto">
      <Swiper
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        {continent}
      </Swiper>
    </Flex>
  )
}
