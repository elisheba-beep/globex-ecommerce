import '../styles/globals.scss'
import '../styles/reset.scss'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <NextNProgress color='#c4c4c4'/>
  <Component {...pageProps} />
    </>)
}

export default MyApp
