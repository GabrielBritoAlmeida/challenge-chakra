import { GetStaticProps } from 'next'

import { Flex, Divider, Text } from '@chakra-ui/react'
import { Banner } from 'components/Banner'
import { SectionTravel } from 'components/SectionTravel'
import { Slide } from 'components/Slide'

export default function Home({ data }) {
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
        <Slide arrContinent={data} />
      </Flex>
    </Flex>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3333/continents_images')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  return {
    props: { data },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}
