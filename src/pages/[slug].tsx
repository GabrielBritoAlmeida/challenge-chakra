import { Box, Stack } from '@chakra-ui/react'
import { BannerContinent } from 'componentsContinent/BannerContinent'
import { DescriptionContinent } from 'componentsContinent/DescriptionContinent'

export default function Continent() {
  return (
    <Box>
      <BannerContinent />

      <Box mt={['24px', '150px']} px={['16px', '150px']}>
        <Box mb={['40px', '80px']}>
          <DescriptionContinent />
        </Box>

        <section>
          <h2>Cidades +100</h2>

          <div>
            <img src="#londres" alt="londres" />
            <strong>londres</strong>
            <span>Reino Unido</span>
            <img src="#bandeira" alt="bandeira" />
          </div>

          <div>
            <img src="#londres" alt="londres" />
            <strong>londres</strong>
            <span>Reino Unido</span>
            <img src="#bandeira" alt="bandeira" />
          </div>

          <div>
            <img src="#londres" alt="londres" />
            <strong>londres</strong>
            <span>Reino Unido</span>
            <img src="#bandeira" alt="bandeira" />
          </div>

          <div>
            <img src="#londres" alt="londres" />
            <strong>londres</strong>
            <span>Reino Unido</span>
            <img src="#bandeira" alt="bandeira" />
          </div>
        </section>
      </Box>
    </Box>
  )
}
