import React from 'react'
import styles from '../styles/containers/Hero.module.scss'
import bg from '../assets/sd.png'
import Link from 'next/link'
import dp from "../assets/dp.jpg"
import Image from 'next/image'
const Hero = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.introWrapper}>

        <p className={styles.greetingText}>{'Hi There, I am ->'}</p>

        <p className={styles.nameText}>{'Vidit Chawda.'}</p>

        <p className={styles.workText}>
          {'I build stuffs for web'}
        </p>
       
        <p className={styles.currentStatusText}>
          {`I'm a front-end software developer. I build both for web. 
                    Currently, I'm more concentrating on
                    client projects. I love to guide and support others.`}
        </p>
        <Image src={dp} alt="Hero Image" height={150} width={150}></Image>
        <button className={styles.resumeDownloadButton}>
          <a href="https://drive.google.com/file/d/1cJzN988zfwvqIYoN-QJnIKWl_7nh1VOi/view">
            {'Download my Resume!'}
          </a>
        </button>
      </div>
    </div>
  )
}

export default Hero