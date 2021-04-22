import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'

interface DescriptionContinentProps {
  description: string
  countries: number
  tongues: number
  cities: number
  more_cities: number
}

export function DescriptionContinent({
  cities,
  countries,
  description,
  tongues,
  more_cities
}: DescriptionContinentProps) {
  const isWideVersion = useBreakpointValue({
    base: true,
    md: false
  })

  return (
    <Flex flexDirection={isWideVersion ? 'column' : 'row'}>
      <Text flex="1" fontSize={['1xl', '2xl']} lineHeight={['32px', '40px']}>
        {description}
      </Text>

      <Flex flex="1" align="center" justify="space-around" mt={['16px', '0']}>
        <Flex flexDirection="column" align="center" m="20px">
          <Text
            fontSize={['4xl', '6xl']}
            fontWeight="medium"
            color="yellow.400"
          >
            {countries}
          </Text>
          <Text as="strong" fontSize="x-large">
            países
          </Text>
        </Flex>

        <Flex flexDirection="column" align="center" m="20px">
          <Text
            fontSize={['4xl', '6xl']}
            fontWeight="medium"
            color="yellow.400"
          >
            {tongues}
          </Text>
          <Text as="strong" fontSize="x-large">
            línguas
          </Text>
        </Flex>

        <Flex flexDirection="column" align="center" m="20px">
          <Text
            fontSize={['4xl', '6xl']}
            fontWeight="medium"
            color="yellow.400"
          >
            {cities}
          </Text>
          <Text as="strong" fontSize="x-large">
            cidades +{more_cities}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
