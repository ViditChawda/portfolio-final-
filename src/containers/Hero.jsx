import React from 'react'
import styles from '../styles/containers/Hero.module.scss'
import bg from '../assets/sd.png'
import Link from 'next/link'
import dp from "../assets/dp.jpg"
import Image from 'next/image'
import { FiGithub } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import { BsMedium } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'
import { FiFacebook } from 'react-icons/fi'
import { FiTwitter } from 'react-icons/fi'
import Typewriter from 'typewriter-effect';
import mp from '../assets/my pic.jpeg'

const Hero = () => {

  return (
    <div id="Home" className={styles.introContainer}>

      <div className={styles.introWrapper}>

        <p className={styles.greetingText}>{''}</p>

        <div className={styles.nameText}><Typewriter
          options={{
            strings: ['Hello there i am', 'Vidit Chawda.'],
            autoStart: true,
            loop: true,
          }}
        /></div>

        <p className={styles.workText}>
          {'I build stuffs for web'}
        </p>

        <p className={styles.currentStatusText}>

          {`I'm a front-end software developer. I build for web. 
                    Currently, I'm more concentrating on
                    backend development, I love to guide and support others.`}
        </p>

        <div className={styles.myIcons}>
          <a href="https://github.com/ViditChawda"><FiGithub /></a>
          <a href="https://www.linkedin.com/in/vidit-chawda-b4a740210/"><FiLinkedin /></a>
          <a href="https://www.instagram.com/vidit_chawda.23/"><FiInstagram /></a>
          <a href="https://www.facebook.com/vidit.chawda.7"><FiFacebook /></a>
          <a href="https://twitter.com/ViditChawda723"><FiTwitter /></a>
        </div>
        <div className={styles.buttonDiv}>
          <button className={styles.resumeDownloadButton}>
            <a href="https://drive.google.com/file/d/1cJzN988zfwvqIYoN-QJnIKWl_7nh1VOi/view">
              {'Download my Resume!'}
            </a>
          </button>
        </div>

      </div>
      <div className={styles.imageContainer}>
        <Image className={styles.imageMine} src={mp} />
      </div>
    </div>
  )
}

export default Hero