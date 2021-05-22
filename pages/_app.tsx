import Head from 'next/head'
import { Header } from '../components/Header'
import { MenuAside } from '../components/MenuAside'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <MenuAside />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
