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
import { motion } from 'framer-motion'

const Skills = () => {
    return (
        <div id="Skills" className={styles.skillsContainer}>
            <Heading title="Skills" />
            <div className={styles.skillsWrapper}>
                <div className={styles.skills}>
                    <motion.div initial={{
                        y: 300,
                        opacity: 0
                    }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <Image src={react} className={styles.skillsLogo} />
                        <Image src={next} className={styles.skillsLogo} />
                        <Image src={html} className={styles.skillsLogo} />
                    </motion.div>

                    <motion.div
                        initial={{
                            y: 300,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <Image src={as} className={styles.skillsLogo} />
                        <Image src={tailwind} className={styles.skillsLogo} />
                    </motion.div>

                    <motion.div initial={{
                        y: 300,
                        opacity: 0
                    }}
                    transition={{duration : 1}}
                    whileInView={{opacity: 1, x:0}}>

                        <Image src={css} className={styles.skillsLogo} />
                    </motion.div>
                    <motion.div initial={{
                        y: 300,
                        opacity: 0
                    }}
                    transition={{duration : 1}}
                    whileInView={{opacity: 1, x:0}}>
                        <Image src={vscode} className={styles.skillsLogo} />
                        <Image src={javascript} className={styles.skillsLogo} />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Skills