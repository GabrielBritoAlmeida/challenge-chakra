import { Flex, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export function Header() {
  const { asPath } = useRouter()

  const isHome = asPath === '/'

  return (
    <Flex
      w="100%"
      h="100px"
      maxHeight="100px"
      align="center"
      justify="center"
      position="relative"
    >
      {!isHome && (
        <Link href="/" passHref>
          <Image
            cursor="pointer"
            position="absolute"
            top={['46%', '36%']}
            left="10%"
            boxSize={['16px', '26px']}
            objectFit="cover"
            src="/images/arrowLeft.svg"
            alt="Logo com texto world trip"
          />
        </Link>
      )}

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
