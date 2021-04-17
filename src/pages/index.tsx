import { Flex, Divider, Text } from '@chakra-ui/react'
import { Banner } from 'components/Banner'
import { Header } from 'components/Header'
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
    subtitle: 'O continente mais antigo',
    image: '/images/continentes/africa.jpg'
  },
  {
    title: 'América',
    subtitle: 'O continente mais antigo',
    image: '/images/continentes/america.jpg'
  },
  {
    title: 'Ásia',
    subtitle: 'O continente mais antigo',
    image: '/images/continentes/asia.jpg'
  },
  {
    title: 'Oceania',
    subtitle: 'O continente mais antigo',
    image: '/images/continentes/oceania.jpg'
  }
]

export default function Home() {
  return (
    <Flex w="100vw" h="100%" flexDirection="column" pb="60px">
      <Header />
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

      <Flex justify="center" mx="auto" my="52px">
        <Text textAlign="center" fontSize="4xl">
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
      </Flex>

      <Flex justify="center" px="100px">
        <Slide arrContinent={arrMockContinent} />
      </Flex>
    </Flex>
  )
}
