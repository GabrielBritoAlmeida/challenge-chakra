import { GetServerSideProps } from 'next'

import { Box } from '@chakra-ui/react'
import { BannerContinent } from 'componentsContinent/BannerContinent'
import { DescriptionContinent } from 'componentsContinent/DescriptionContinent'
import { MoreCities } from 'componentsContinent/MoreCities'

interface Cities {
  title: string
  subtitle: string
  image: string
  flag?: string
}

interface Continent {
  id: number
  title: string
  subtitle: string
  image: string
  slug: string
  description: string
  countries: number
  tongues: number
  cities: number
  more_cities: number
  major_cities: Cities[]
}

interface ContinentProps {
  continent: Continent
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <Box mb="36px">
      <BannerContinent image={continent.image} title={continent.title} />

      <Box mt={['24px', '80px']} px={['16px', '150px']}>
        <Box mb={['40px', '80px']}>
          <DescriptionContinent
            cities={continent.cities}
            countries={continent.countries}
            description={continent.description}
            tongues={continent.tongues}
            more_cities={continent.more_cities}
          />
        </Box>

        <MoreCities cities={continent.major_cities} />
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

  const {
    id,
    title,
    subtitle,
    image,
    cities,
    more_cities,
    countries,
    description,
    tongues,
    major_cities
  }: Continent = data[0]

  const continent = {
    id,
    title,
    subtitle,
    image,
    cities,
    more_cities,
    countries,
    description,
    tongues,
    slug: data[0].slug,
    major_cities
  }

  return {
    props: { continent }
  }
}
