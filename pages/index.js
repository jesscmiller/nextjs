import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Navbar />
      <main className={styles.main}>
        <h1className={styles.title}>Welcome to &Jessicaapos;s website!</h1>
        <p className={styles.description}>
          My new site is currently under construction so please bear with me.
         </p>
      </main>	
      <Footer />
    </div>
  )
}
