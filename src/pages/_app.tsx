import '@/pages/styles/globals/globals.scss'
import 'ress'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
