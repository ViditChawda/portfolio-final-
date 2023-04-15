import Heading from '@/components/Heading'
import React from 'react'
import styles from '../styles/containers/Skills.module.scss'
import Image from 'next/image'
import react from '../assets/react-logo.png'
import next from '../assets/next-logo.png'
import html from '../assets/html-logo.png'
import css from '../assets/css-logo.jpeg'
import vscode from '../assets/vscode-logo.png'
import javascript from '../assets/javascript-logo.png'
import tailwind from '../assets/tailwind-logo.png'
import as from '../assets/androidstudio-logo.png'

const Skills = () => {
    return (
        <div id="Skills" className={styles.skillsContainer}>
            <Heading title="Skills" />
            <div className={styles.skillsWrapper}>
                <div className={styles.skills}>
                    <div>
                        <Image src={react} className={styles.skillsLogo} />
                        <Image src={next} className={styles.skillsLogo} />
                        <Image src={html} className={styles.skillsLogo} />
                    </div>
                    <div>
                       
                        <Image src={as} className={styles.skillsLogo} />
                        <Image src={tailwind} className={styles.skillsLogo} />
                    </div>
                    <div>
                        
                        <Image src={css} className={styles.skillsLogo} />
                    </div>
                    <div>
                        <Image src={vscode} className={styles.skillsLogo} />
                        <Image src={javascript} className={styles.skillsLogo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills