import { Flex, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex w="100vw" h="100px" align="center" justify="center">
      <Image
        boxSize="100%"
        objectFit="cover"
        src="/images/logo.svg"
        alt="Logo com texto world trip"
      />
    </Flex>
  )
}
