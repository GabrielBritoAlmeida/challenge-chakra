import { Box, Image, Text } from '@chakra-ui/react'

export function BannerContinent() {
  return (
    <Box flex="1" maxH="500px" position="relative">
      <Image
        w="100%"
        h="100%"
        src="/images/continent_europa.png"
        alt="imagem da torre de londres, visão panoramica da cidade"
      />
      <Text
        as="h1"
        color="white"
        fontWeight="bold"
        fontSize="5xl"
        position="absolute"
        zIndex="1"
        left="10%"
        bottom="10%"
      >
        Europa
      </Text>
    </Box>
  )
}
