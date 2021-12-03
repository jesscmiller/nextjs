import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Jessica's website!</h1>
      <p>My new site is currently under construction so please bear with me.</p>
      <Footer />
    </div>
  )
}
