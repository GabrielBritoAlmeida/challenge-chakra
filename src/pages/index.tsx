import { Flex, Divider, Text } from '@chakra-ui/react'
import { Banner } from 'components/Banner'
import { Header } from 'components/Header'
import { SectionTravel } from 'components/SectionTravel'
import { Slide } from 'components/Slide'

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

      <Slide />
    </Flex>
  )
}
