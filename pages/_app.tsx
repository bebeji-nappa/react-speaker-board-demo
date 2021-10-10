import 'react-speaker-board/styles/style.css'
import 'richmd/richmd.css'
import '../styles/globals.css'
import '../styles/Slide.css'
import '../styles/docs.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
