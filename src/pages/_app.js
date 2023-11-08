import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = extendTheme({});


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}> {/* If using a custom theme */}
      <Component  {...pageProps} />
    </ChakraProvider>
  );
}