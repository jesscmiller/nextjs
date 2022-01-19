import '../styles/globals.css'
import Navbar from '../comps/Navbar.js'
import Footer from '../comps/Footer.js'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <div class="header">
        <h1>Header</h1>
      </div>
      <p>PHOTOGRAPHER</p>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp
