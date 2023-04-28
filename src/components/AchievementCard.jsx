import React from 'react'
import styles from '../styles/components/AchievementCard.module.scss'
import Image from 'next/image'
import logosih from '../assets/logosih.png'
import winner from '../assets/winner.png'

function AchievementCard(props) {
  return (
    <div data-aos="fade-up" className={`${styles.achievementContainer} ${props.className}`}>
      <div className={styles.imageWrapper}>

        <div className={styles.achHeading}>
          <div data-aos="fade-right" className={styles.title}>{props.title} <p className={styles.line}></p></div>
          <Image className={styles.headingLogo} src={winner}></Image>
        </div>


        <Image className={styles.image} src={props.image}></Image>

        <p className={styles.subTitle}>{props.subTitle} : </p>
        <p className={styles.date}>{props.date}</p>
        <p className={styles.body}>{props.body}</p>
        <p className={styles.icons}>{props.icons}</p>
      </div>

    </div>
  )
}

export default AchievementCard