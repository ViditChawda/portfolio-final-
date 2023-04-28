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
import Blogs from '@/containers/Blogs'
import Achievements from '@/containers/Achievements'
import Projects from '@/containers/Projects'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Image className={styles.background}></Image> */}
      <Header className={styles.Header}/>
      <Hero className={styles.Hero}/>
      <About className={styles.About} />
      {/* <Skills/> */}
      <Experience/>
      <Blogs/>
      <Achievements/>
      <Projects/>
      <Footer/>
      
    </div>
  )
}
