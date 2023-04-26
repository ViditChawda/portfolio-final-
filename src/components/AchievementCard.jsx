import React from 'react'
import styles from '../styles/components/AchievementCard.module.scss'
import Image from 'next/image'

function AchievementCard(props) {
  return (
    <div className={`${styles.achievementContainer} ${props.className}`}>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} src={props.image}></Image>
      </div>
      <div className={styles.description}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.subTitle}>{props.subTitle}</p>
        <p className={styles.date}>{props.date}</p>
        <p className={styles.body}>{props.body}</p>
        <p className={styles.icons}>{props.icons}</p>
      </div>
    </div>
  )
}

export default AchievementCard