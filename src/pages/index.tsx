import { Flex, Divider, Text } from '@chakra-ui/react'
import { Banner } from 'components/Banner'
import { SectionTravel } from 'components/SectionTravel'
import { Slide } from 'components/Slide'

const arrMockContinent = [
  {
    title: 'Europa',
    subtitle: 'O continente mais antigo',
    image: '/images/continentes/europa.png'
  },
  {
    title: 'Africa',
    subtitle: 'Se apaixone pela natureza.',
    image: '/images/continentes/africa.jpg'
  },
  {
    title: 'América',
    subtitle: 'Terra de muitos povos.',
    image: '/images/continentes/america.jpg'
  },
  {
    title: 'Ásia',
    subtitle: 'Cultura maravilhosa.',
    image: '/images/continentes/asia.jpg'
  },
  {
    title: 'Oceania',
    subtitle: 'Se apaixone por esse clima.',
    image: '/images/continentes/oceania.jpg'
  }
]

export default function Home() {
  return (
    <Flex w="100%" h="100%" flexDirection="column" pb="60px">
      <Banner />
      <SectionTravel />

      <Flex justify="center">
        <Divider
          w="90px"
          border="2px"
          borderColor="blackAlpha.900"
          variant="solid"
        />
      </Flex>

      <Flex justify="center" mx="auto" my={['20px', '52px']}>
        <Text textAlign="center" fontSize={['2xl', '4xl']}>
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Flex>

      <Flex justify="center" px={['0', '100px']}>
        <Slide arrContinent={arrMockContinent} />
      </Flex>
    </Flex>
  )
}
