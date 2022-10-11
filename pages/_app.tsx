import '../styles/globals.css';
import type { AppProps } from 'next/app'
import {QueryClientProvider, QueryClient } from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools' 
function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()
  return( 
    <div>
  <QueryClientProvider client={queryClient} >

  <Component {...pageProps} />
  <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
  </QueryClientProvider>
   </div>
   )
}

export default MyApp
