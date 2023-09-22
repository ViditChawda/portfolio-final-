import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { FiLinkedin } from 'react-icons/fi'
import { FiInstagram } from 'react-icons/fi'
import { FaXTwitter } from 'react-icons/fa6'
import { BsMedium } from 'react-icons/bs'
import styles from '../styles/components/SocialIcons.module.scss'

const SocialIcons = () => {
    return (
        <>
            <div></div>
            <div className={styles.iconsWrapper}>
                <a><div className={styles.line}></div></a>
                <a href='https://github.com/ViditChawda'><FiGithub className={styles.icon} /></a>
                <a href=''><BsMedium className={styles.icon} /></a>
                <a href='https://twitter.com/ViditChawda723'><FaXTwitter className={styles.icon} /></a>
                <a href='https://www.instagram.com/vidit_chawda.23/'><FiInstagram className={styles.icon} /></a>
                <a href='https://www.linkedin.com/in/vidit-chawda-b4a740210/'><FiLinkedin className={styles.icon} /></a>
                <a><div className={styles.line}></div></a>
                <div className={styles.line1}>

                </div>
            </div>
        </>

    )
}

export default SocialIcons