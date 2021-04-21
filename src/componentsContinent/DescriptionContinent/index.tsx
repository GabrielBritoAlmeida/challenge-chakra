import { Flex, Text, useBreakpointValue } from '@chakra-ui/react'

export function DescriptionContinent() {
  const isWideVersion = useBreakpointValue({
    base: true,
    md: false
  })

  return (
    <Flex flexDirection={isWideVersion ? 'column' : 'row'}>
      <Text flex="1" fontSize={['1xl', '2xl']} lineHeight={['32px', '40px']}>
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
        rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>

      <Flex flex="1" align="center" justify="space-around" mt={['16px', '0']}>
        <Flex flexDirection="column" align="center" m="20px">
          <Text
            fontSize={['4xl', '6xl']}
            fontWeight="medium"
            color="yellow.400"
          >
            50
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
            60
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
            27
          </Text>
          <Text as="strong" fontSize="x-large">
            cidades +100
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
