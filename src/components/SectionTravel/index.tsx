import { Flex, Image, HStack } from '@chakra-ui/react'

export function SectionTravel() {
  return (
    <Flex
      align="center"
      justify="center"
      w="1160px"
      h="145px"
      mx="auto"
      my="90px"
    >
      <HStack spacing="130px">
        <Image
          sizes="16%"
          cursor="pointer"
          src="/images/nightlife.svg"
          alt="Ícone de um copo de drink, representa vida noturna"
        />

        <Image
          sizes="16%"
          cursor="pointer"
          src="/images/beach.svg"
          alt="Ícone de um copo de drink, representa vida noturna"
        />

        <Image
          sizes="16%"
          cursor="pointer"
          src="/images/modern.svg"
          alt="Ícone de um copo de drink, representa vida noturna"
        />

        <Image
          sizes="16%"
          cursor="pointer"
          src="/images/classic.svg"
          alt="Ícone de um copo de drink, representa vida noturna"
        />

        <Image
          sizes="16%"
          cursor="pointer"
          src="/images/more.svg"
          alt="Ícone de um copo de drink, representa vida noturna"
        />
      </HStack>
    </Flex>
  )
}
