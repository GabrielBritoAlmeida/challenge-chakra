import { Box } from '@chakra-ui/react'
import { BannerContinent } from 'componentsContinent/BannerContinent'
import { DescriptionContinent } from 'componentsContinent/DescriptionContinent'
import { MoreCities } from 'componentsContinent/MoreCities'

export default function Continent() {
  return (
    <Box mb="36px">
      <BannerContinent />

      <Box mt={['24px', '150px']} px={['16px', '150px']}>
        <Box mb={['40px', '80px']}>
          <DescriptionContinent />
        </Box>

        <MoreCities />
      </Box>
    </Box>
  )
}
