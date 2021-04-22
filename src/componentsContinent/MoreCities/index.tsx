import {
  Flex,
  Text,
  Image,
  Avatar,
  Stack,
  HStack,
  useBreakpointValue
} from '@chakra-ui/react'

interface Cities {
  image: string
  flag?: string
  title: string
  subtitle: string
}

interface MoreCitiesProps {
  cities: Cities[]
}

export function MoreCities({ cities }: MoreCitiesProps) {
  const isWideVersion = useBreakpointValue({
    base: true,
    md: false
  })

  const citiesArr = cities.length
    ? cities.map(({ title, subtitle, image, flag }) => (
        <Flex
          key={title}
          flexDirection="column"
          w="256px"
          h="279px"
          mr="45px"
          mt={['20px', '40px']}
          border="1px solid"
          borderColor="yellow.400"
          borderRadius="4px"
        >
          <Image src={image} alt={title} w="100%" h="173px" />
          <HStack flex="1" p="16px" display="flex" justify="space-between">
            <Stack>
              <Text as="strong" fontSize="2xl">
                {title}
              </Text>
              <Text as="span" fontSize="1xl" color="gray.500">
                {subtitle}
              </Text>
            </Stack>
            <Avatar size="sm" src={flag} name={title} />
          </HStack>
        </Flex>
      ))
    : []

  return (
    <Flex flexDirection="column">
      <Text as="h2" fontSize={['2xl', '4xl']}>
        Cidades +100
      </Text>

      <Flex flexWrap="wrap" justify={isWideVersion ? 'center' : 'flex-start'}>
        {citiesArr}
      </Flex>
    </Flex>
  )
}
