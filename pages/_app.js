import '../styles/globals.css'
import Navbar from '../comps/Navbar.js';
import Footer from '../comps/Footer.js';
import Link from 'next/link';
import Image from 'next/image';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="mainheader"><Link href="/"><a><p>JESSICA MILLER</p></a></Link> </div>
      <div className="subheader"> <p>PHOTOGRAPHER</p> </div>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
      <div className= "social"> 
        <Link href="https://www.instagram.com/jessc.miller/"><a><Image src='/instagram.ico'  height={22.5} width={22.5}/></a></Link>  <Link href="https://www.twitter.com/jessicacmiller_"><a><Image src='/twitter.ico'  height={22.5} width={22.5}/></a></Link> <Link href="https://www.facebook.com/jesscmiller.art"><a><Image src='/facebook (2).ico'  height={22.5} width={22.5}/></a></Link> <Link href="https://www.linkedin.com/in/jessica-cmiller/"><a><Image src='/linkedin.ico'  height={22.5} width={22.5}/></a></Link>
      </div>  
    </>
  );
}

export default MyApp
