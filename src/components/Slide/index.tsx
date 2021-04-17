import { Flex } from '@chakra-ui/react'

import SwiperCore, {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  SwiperOptions
} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper-bundle.min.css'
import 'swiper/components/navigation'

SwiperCore.use([Navigation, Pagination, A11y, Autoplay])

import styles from './styles.module.css'

export function Slide() {
  return (
    <Flex w="100%" maxW="1240px" h="450px" mx="auto">
      <Swiper
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        // autoplay={{ delay: 3000, disableOnInteraction: true }}
      >
        <SwiperSlide>
          <Flex w="1240px" h="450px" bg="gray.400">
            Slide 1
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex w="1240px" h="450px" bg="blue">
            Slide 2
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex w="1240px" h="450px" bg="red">
            Slide 3
          </Flex>
        </SwiperSlide>

        <SwiperSlide>
          <Flex w="1240px" h="450px" bg="yellow">
            Slide 4
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Flex>
  )
}
