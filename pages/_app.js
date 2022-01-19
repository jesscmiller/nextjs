import '../styles/globals.css'
import Navbar from '../comps/Navbar.js'
import Footer from '../comps/Footer.js'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="mainheader"> <p>JESSICA MILLER</p> </div>
      <div className="subheader"> <p>PHOTOGRAPHER</p> </div>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
