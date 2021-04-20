import { Box, Image, Text } from '@chakra-ui/react'

export function BannerContinent() {
  return (
    <Box
      w="100%"
      h={['150px', '350px', '420px', '500px']}
      maxH="500px"
      position="relative"
    >
      <Image
        w="100%"
        h="100%"
        objectFit="cover"
        src="/images/continent_europa.png"
        alt="imagem da torre de londres, visão panoramica da cidade"
      />
      <Text
        as="h1"
        color="white"
        fontWeight="bold"
        fontSize={['3xl', '5xl']}
        position="absolute"
        zIndex="1"
        left={['40%', '10%']}
        bottom={['35%', '10%']}
      >
        Europa
      </Text>
    </Box>
  )
}
