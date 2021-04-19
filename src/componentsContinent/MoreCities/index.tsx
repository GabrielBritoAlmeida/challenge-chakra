import {
  Flex,
  Text,
  Image,
  Avatar,
  Stack,
  HStack,
  useBreakpointValue
} from '@chakra-ui/react'

export function MoreCities() {
  const isWideVersion = useBreakpointValue({
    base: true,
    md: false
  })

  return (
    <Flex flexDirection="column">
      <Text as="h2" fontSize={['2xl', '4xl']}>
        Cidades +100
      </Text>

      <Flex flexWrap="wrap" justify={isWideVersion ? 'center' : 'flex-start'}>
        <Flex
          flexDirection="column"
          w="256px"
          h="279px"
          mr="45px"
          mt={['20px', '40px']}
          border="1px solid"
          borderColor="yellow.400"
          borderRadius="4px"
        >
          <Image src="/images/countries/londres.png" alt="londres" />
          <HStack flex="1" p="16px" display="flex" justify="space-between">
            <Stack>
              <Text as="strong" fontSize="2xl">
                Londres
              </Text>
              <Text as="span" fontSize="1xl" color="gray.500">
                Reino Unido
              </Text>
            </Stack>
            <Avatar
              size="sm"
              src="/images/flags/flag_londres.svg"
              name="Londres"
            />
          </HStack>
        </Flex>

        <Flex
          flexDirection="column"
          w="256px"
          h="279px"
          mr="45px"
          mt={['20px', '40px']}
          border="1px solid"
          borderColor="yellow.400"
          borderRadius="4px"
        >
          <Image src="/images/countries/londres.png" alt="londres" />
          <HStack flex="1" p="16px" display="flex" justify="space-between">
            <Stack>
              <Text as="strong" fontSize="2xl">
                Londres
              </Text>
              <Text as="span" fontSize="1xl" color="gray.500">
                Reino Unido
              </Text>
            </Stack>
            <Avatar
              size="sm"
              src="/images/flags/flag_londres.svg"
              name="Londres"
            />
          </HStack>
        </Flex>

        <Flex
          flexDirection="column"
          w="256px"
          h="279px"
          mr="45px"
          mt={['20px', '40px']}
          border="1px solid"
          borderColor="yellow.400"
          borderRadius="4px"
        >
          <Image src="/images/countries/londres.png" alt="londres" />
          <HStack flex="1" p="16px" display="flex" justify="space-between">
            <Stack>
              <Text as="strong" fontSize="2xl">
                Londres
              </Text>
              <Text as="span" fontSize="1xl" color="gray.500">
                Reino Unido
              </Text>
            </Stack>
            <Avatar
              size="sm"
              src="/images/flags/flag_londres.svg"
              name="Londres"
            />
          </HStack>
        </Flex>

        <Flex
          flexDirection="column"
          w="256px"
          h="279px"
          mr="45px"
          mt={['20px', '40px']}
          border="1px solid"
          borderColor="yellow.400"
          borderRadius="4px"
        >
          <Image src="/images/countries/londres.png" alt="londres" />
          <HStack flex="1" p="16px" display="flex" justify="space-between">
            <Stack>
              <Text as="strong" fontSize="2xl">
                Londres
              </Text>
              <Text as="span" fontSize="1xl" color="gray.500">
                Reino Unido
              </Text>
            </Stack>
            <Avatar
              size="sm"
              src="/images/flags/flag_londres.svg"
              name="Londres"
            />
          </HStack>
        </Flex>

        <Flex
          flexDirection="column"
          w="256px"
          h="279px"
          mr="45px"
          mt={['20px', '40px']}
          border="1px solid"
          borderColor="yellow.400"
          borderRadius="4px"
        >
          <Image src="/images/countries/londres.png" alt="londres" />
          <HStack flex="1" p="16px" display="flex" justify="space-between">
            <Stack>
              <Text as="strong" fontSize="2xl">
                Londres
              </Text>
              <Text as="span" fontSize="1xl" color="gray.500">
                Reino Unido
              </Text>
            </Stack>
            <Avatar
              size="sm"
              src="/images/flags/flag_londres.svg"
              name="Londres"
            />
          </HStack>
        </Flex>

        <Flex
          flexDirection="column"
          w="256px"
          h="279px"
          mr="45px"
          mt={['20px', '40px']}
          border="1px solid"
          borderColor="yellow.400"
          borderRadius="4px"
        >
          <Image src="/images/countries/londres.png" alt="londres" />
          <HStack flex="1" p="16px" display="flex" justify="space-between">
            <Stack>
              <Text as="strong" fontSize="2xl">
                Londres
              </Text>
              <Text as="span" fontSize="1xl" color="gray.500">
                Reino Unido
              </Text>
            </Stack>
            <Avatar
              size="sm"
              src="/images/flags/flag_londres.svg"
              name="Londres"
            />
          </HStack>
        </Flex>

        <Flex
          flexDirection="column"
          w="256px"
          h="279px"
          mr="45px"
          mt={['20px', '40px']}
          border="1px solid"
          borderColor="yellow.400"
          borderRadius="4px"
        >
          <Image src="/images/countries/londres.png" alt="londres" />
          <HStack flex="1" p="16px" display="flex" justify="space-between">
            <Stack>
              <Text as="strong" fontSize="2xl">
                Londres
              </Text>
              <Text as="span" fontSize="1xl" color="gray.500">
                Reino Unido
              </Text>
            </Stack>
            <Avatar
              size="sm"
              src="/images/flags/flag_londres.svg"
              name="Londres"
            />
          </HStack>
        </Flex>

        <Flex
          flexDirection="column"
          w="256px"
          h="279px"
          mr="45px"
          mt={['20px', '40px']}
          border="1px solid"
          borderColor="yellow.400"
          borderRadius="4px"
        >
          <Image src="/images/countries/londres.png" alt="londres" />
          <HStack flex="1" p="16px" display="flex" justify="space-between">
            <Stack>
              <Text as="strong" fontSize="2xl">
                Londres
              </Text>
              <Text as="span" fontSize="1xl" color="gray.500">
                Reino Unido
              </Text>
            </Stack>
            <Avatar
              size="sm"
              src="/images/flags/flag_londres.svg"
              name="Londres"
            />
          </HStack>
        </Flex>
      </Flex>
    </Flex>
  )
}
