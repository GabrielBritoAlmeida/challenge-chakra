import {
  Image,
  Flex,
  Text,
  Stack,
  SimpleGrid,
  useBreakpointValue
} from '@chakra-ui/react'

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: true,
    md: false
  })

  return (
    <Flex w="100%" h="335px" maxH="335px" position="relative">
      <Image
        w="100%"
        h="100%"
        position="absolute"
        objectFit="cover"
        src="/images/background.svg"
        alt="background, imagem do céu escuro com estrelas"
      />

      <SimpleGrid
        zIndex="1"
        columns={isWideVersion ? 1 : 2}
        flex="1"
        justifyContent="space-between"
      >
        <Flex flex="1" align="center" justify="center" p="16px">
          <Stack>
            <Text as="h1" color="white" fontSize="4xl">
              5 Continentes, <br /> infinitas possibilidades.
            </Text>

            <Text as="h2" color="whiteAlpha.700" fontSize="large" maxW="524px">
              Chegou a hora de tirar do papel a viagem que você <br /> sempre
              sonhou.
            </Text>
          </Stack>
        </Flex>

        {!isWideVersion && (
          <Flex flex="1" align="center" justify="center" p="16px">
            <Image
              mb={-120}
              objectFit="cover"
              src="/images/airplane.svg"
              alt="background, imagem do céu escuro com estrelas"
            />
          </Flex>
        )}
      </SimpleGrid>
    </Flex>
  )
}
