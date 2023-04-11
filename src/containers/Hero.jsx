import React from 'react'
import styles from '../styles/containers/Hero.module.scss'
import bg from '../assets/sd.png'
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

                {/* <button className={styles.resumeDownloadButton}>
                    <Link href={RESUME_LOCAL_URL}>
                        <a
                            href={RESUME_LOCAL_URL}
                            target="_blank"
                            rel="noreferrer"
                            download>
                            {'Download my Resume!'}
                        </a>
                    </Link>
                </button> */}
            </div>
        </div>
  )
}

export default Hero