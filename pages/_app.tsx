import "../styles/globals.css"

import Header from "../components/header"
import Fotter from "../components/footer"
import { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container">
      <Header />
      <Component {...pageProps} />
      <Fotter />
    </div>
  )
}

export default MyApp
