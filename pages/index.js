import Head from 'next/head'
import Navbar from '../comps/Navbar'
import Navbar from '../comps/Footer'
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

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Jessica&apos;s website!
        </h1>

        <p className={styles.description}>
          My new site is currently under construction so please bear with me.
        </p>
 


        <div className={styles.grid}>
          <a href="https://www.instagram.com/jessc.miller" className={styles.card}>
            <h2>Instagram &rarr;</h2>
          </a>

          <a href="https://www.twitter.com/jessicacmiller_" className={styles.card}>
            <h2>Twitter &rarr;</h2>
          </a>

          <a href="http://www.materialityexposed.com" className={styles.card}>
            <h2>Materiality Exposed exhibition &rarr;</h2>
          </a>

        </div>
      </main>

  
  )
}
