import { Flex, Divider } from '@chakra-ui/react'
import { Banner } from 'components/Banner'
import { Header } from 'components/Header'
import { SectionTravel } from 'components/SectionTravel'

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" flexDirection="column">
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
    </Flex>
  )
}
