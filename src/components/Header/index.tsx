import { Flex, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex w="100%" h="100px" maxHeight="100px" align="center" justify="center">
      <Image
        w="100%"
        h="80%"
        objectFit="cover"
        src="/images/logo.svg"
        alt="Logo com texto world trip"
      />
    </Flex>
  )
}
