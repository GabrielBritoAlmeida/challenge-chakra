import { GetServerSideProps } from 'next'

import { Box } from '@chakra-ui/react'
import { BannerContinent } from 'componentsContinent/BannerContinent'
import { DescriptionContinent } from 'componentsContinent/DescriptionContinent'
import { MoreCities } from 'componentsContinent/MoreCities'

interface ContinentProps {
  continent: {
    id: number
    title: string
    subtitle: string
    image: string
    slug: string
  }
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <Box mb="36px">
      <BannerContinent image={continent.image} title={continent.title} />

      <Box mt={['24px', '80px']} px={['16px', '150px']}>
        <Box mb={['40px', '80px']}>
          <DescriptionContinent />
        </Box>

        <MoreCities />
      </Box>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params

  const res = await fetch(`http://localhost:3333/continents?slug=${slug}`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true
    }
  }

  const { id, title, subtitle, image } = data[0]

  const continent = { id, title, subtitle, image, slug: data[0].slug }

  return {
    props: { continent }
  }
}
