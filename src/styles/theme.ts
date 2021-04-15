import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },

  styles: {
    global: {
      body: {
        bg: 'white',
        color: '#47585B'
      }
    }
  }
})
