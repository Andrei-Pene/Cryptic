import { ChakraProvider } from '@chakra-ui/provider'
import { extendTheme } from '@chakra-ui/react'
import '../styles/globals.css'
import MasterLayout from '../Components/MasterLayout'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
  <MasterLayout>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </MasterLayout>
  )
    
}

export default MyApp
