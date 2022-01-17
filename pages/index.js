import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Welcome to Jessica&apos;s website!</h1>
      <p className={styles.text}>My new site is currently under construction so please bear with me.</p>
      <a href={'https://www.instagram.com/jessc.miller/'}> a className={styles.btn}>Follow me on Instagram</a>
    </div>
  )
}
