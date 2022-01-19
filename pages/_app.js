import '../styles/globals.css'
import Navbar from '../comps/Navbar.js'
import Footer from '../comps/Footer.js'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <h1 className={styles.mainheader}>JESSICA MILLER</h1>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
