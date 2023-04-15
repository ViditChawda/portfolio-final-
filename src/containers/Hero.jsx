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

const Hero = () => {
  return (
    <div  id="Home"  className={styles.introContainer}>
      <div  className={styles.introWrapper}>

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

        <div className={styles.myIcons}>
          <a href=""><FiGithub /></a>
          <a href=""><FiLinkedin /></a>
          <a href=""><FiInstagram /></a>
          <a href=""><FiFacebook /></a>
          <a href=""><FiTwitter /></a>
        </div>

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