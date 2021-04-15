import { Image, Flex, Text, Stack, SimpleGrid } from '@chakra-ui/react'

export function Banner() {
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

      <SimpleGrid zIndex="1" columns={2} spacing={10} alignItems="center">
        <Flex ml={140} mr={50} my={20}>
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

        <Flex w="100%" mb={-120} justify="flex-end">
          <Image
            w="100%"
            maxW="417px"
            maxH="270px"
            objectFit="cover"
            src="/images/airplane.svg"
            alt="background, imagem do céu escuro com estrelas"
          />
        </Flex>
      </SimpleGrid>
    </Flex>
  )
}
