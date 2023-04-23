import React, { useState } from 'react'
import styles from '../styles/containers/Header.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi';


const Header = () => {

  const [opennav, setopennav] = useState(false);

  return (
    <nav className={styles.mainnav} >
      <div className={styles.namelogo}> © <span>V</span>idit <span>C</span>hawda.</div>
      <div className={styles.navoptions}>
        <a href="#Home">Home.js</a>
        <a href="#About">About.js</a>
        <a href="#Skills">Skills.js</a>
        <a href="#Experience">Experience.js</a>
        <a href="#Contact">Contact.js</a>
      </div>
      {opennav && <div className={styles.navmenu}>
        <a href="">Home.js</a>
        <a href="">About.js</a>
        <a href="">Skills</a>
        <a href="">Experience</a>
      </div>}
      <div className={styles.hamburger}>
        <GiHamburgerMenu onClick={() => {
          setopennav(!opennav)
        }} />
      </div>
    </nav>
  )
}

export default Header