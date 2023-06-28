import React, { useEffect, useState } from 'react'
import styles from '../styles/containers/Header.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx'
import Image from 'next/image';
import Footer from './Footer';
import mp from '../assets/my pic.jpeg'


const Header = () => {

  const [opennav, setopennav] = useState(false);

  return (
    <nav className={styles.mainnav} >
      <div className={styles.namelogo}> © <span>V</span>idit <span>C</span>hawda.</div>
      <div className={styles.navoptions}>
        <a href="#Home">Home.js</a>
        <a href="#About">About.js</a>
        <a href="#Achievement">Achievements.js</a>
        <a href="#content">Content.js</a>
        <a href="#experience">Experience.js</a>
        <a href="#Projects">Projects.js</a>
        <a href="#Contacts">Contact.js</a>
      </div>
      {opennav && <div className={styles.navmenu}>
        <Image className={styles.myPic} src={mp}></Image>
        <a onClick={() => { setopennav(false) }} href="#Home">Home.js</a>
        <a onClick={() => { setopennav(false) }} href="#About">About.js</a>
        <a onClick={() => { setopennav(false) }} href="#Achievement">Achievements.js</a>
        <a onClick={() => { setopennav(false) }} href="#content">Content.js</a>
        <a onClick={() => { setopennav(false) }} href="#experience">Experience.js</a>
        <a onClick={() => { setopennav(false) }} href="#Projects">Projects.js</a>
        <a onClick={() => { setopennav(false) }} href="#Contacts">Contact.js</a>
      </div>}
      <div onClick={() => {
        setopennav(!opennav)
      }} className={styles.hamburger}>
        {
          !opennav ? <GiHamburgerMenu /> : <RxCross2 />
        }
      </div>
    </nav>
  )
}

export default Header