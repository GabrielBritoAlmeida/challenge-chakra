import { Flex, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex
      w="100%"
      h="100px"
      maxHeight="100px"
      align="center"
      justify="center"
      position="relative"
    >
      <Image
        position="absolute"
        top={['46%', '36%']}
        left="10%"
        boxSize={['16px', '26px']}
        objectFit="cover"
        src="/images/arrowLeft.svg"
        alt="Logo com texto world trip"
      />
      <Image
        w={['200px', '300px']}
        h={['80px', '120px']}
        objectFit="cover"
        src="/images/logo.svg"
        alt="Logo com texto world trip"
      />
    </Flex>
  )
}
