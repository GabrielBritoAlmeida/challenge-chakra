import { Box, Image, Text } from '@chakra-ui/react'

interface BannerContinentProps {
  image: string
  title: string
}

export function BannerContinent({ image, title }: BannerContinentProps) {
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
        src={image}
        alt={`Imagem de uma das cidade da ${title}`}
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
