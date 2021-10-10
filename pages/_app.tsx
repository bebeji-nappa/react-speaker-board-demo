import '../styles/globals.css'
import 'react-speaker-board/styles/style.css'
import '../styles/Slide.css'
// import 'richmd/richmd.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
