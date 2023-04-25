import React from 'react'
import styles from '../styles/components/AchievementCard.module.scss'
import Image from 'next/image'

function AchievementCard(props) {
  return (
    <div className={`${styles.achievementContainer} ${props.className}`}>
      <div className={styles.sdkf}>
        <Image></Image>
      </div>
      <div className={styles.description}>
        <p className={styles.title}>{}</p>
        <p className={styles.date}>{}</p>
        <p className={styles.body}>{}</p>
        <p className={styles.icons}>{}</p>
      </div>
    </div>
  )
}

export default AchievementCard