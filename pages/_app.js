import '../styles/globals.css'
import Navbar from '../comps/Navbar.js'
import Footer from '../comps/Footer.js'
import Link from 'next/link';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="mainheader"><Link href="/"><a><p>JESSICA MILLER</p></a></Link> </div>
      <div className="subheader"> <p>PHOTOGRAPHER</p> </div>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
