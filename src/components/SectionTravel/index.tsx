import { Flex, Image, HStack } from '@chakra-ui/react'

export function SectionTravel() {
  return (
    <Flex
      align="center"
      justify="center"
      h={['120px', '145px']}
      mx="20px"
      my={['45px', '90px']}
    >
      <HStack spacing={['30px', '130px']} overflowX="auto">
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
