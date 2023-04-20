import "../styles/globals.css"

import Header from "../components/header.js"
import Fotter from "../components/fotter.js"

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Header />
      <Component {...pageProps} />
      <Fotter />
    </div>
  )
}

export default MyApp
