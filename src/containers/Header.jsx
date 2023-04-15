import React, { useState } from 'react'
import styles from '../styles/containers/Header.module.scss'
import { GiHamburgerMenu } from 'react-icons/gi';


const Header = () => {

  const [opennav, setopennav] = useState(false);

  return (
    <nav className={styles.mainnav} >
      <div>© Designed By Vidit</div>
      <div className={styles.navoptions}>
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Skills">Skills</a>
        <a href="#Experience">Experience</a>
        <a href="#Contact">Contact</a>
      </div>
      {opennav && <div className={styles.navmenu}>
        <a href="">Home</a>
        <a href="">About Me</a>
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