import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>Hello</p>
      <Footer />
     </div>
  )
}
