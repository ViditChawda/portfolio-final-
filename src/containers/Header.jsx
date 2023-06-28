import React, { useEffect, useState } from 'react'
import styles from '../styles/containers/Header.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx'
import Footer from './Footer';


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
        <a href="#Contact">Contact.js</a>
      </div>
      {opennav && <div className={styles.navmenu}>
        <a href="#Home">Home.js</a>
        <a href="">About.js</a>
        <a href="">Skills</a>
        <a href="">Experience</a>
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