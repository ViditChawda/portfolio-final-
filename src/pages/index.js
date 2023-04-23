import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/containers/Header'
import Hero from '@/containers/Hero'
import About from '@/containers/About'
import Skills from '@/containers/Skills'
import Footer from '@/containers/Footer'
import Experience from '@/containers/Experience'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Header className={styles.Header}/>
      <Hero className={styles.Hero}/>
      <About className={styles.About} />
      <Experience/>
      <Skills/>
      <Footer/>
      
    </div>
  )
}
