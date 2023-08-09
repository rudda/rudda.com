import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Fonts from '../fonts'
import { theme } from '../themes/theme'
import '../styles/glass.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Fonts />
    </ChakraProvider>
  )
}

export default MyApp
