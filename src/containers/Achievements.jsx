import Heading from '@/components/Heading'
import React from 'react'
import styles from '../styles/containers/Achievements.module.scss'
import AchievementCard from '@/components/AchievementCard'
import Slider from 'react-slick';

function Achievements() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };
  return (

    <div className={styles.achContainer}>
      <Heading title="ACHIEVEMENT" />
      <div className={styles.achWrapper}>
        <AchievementCard  className={styles.carouselSlide} title="" />
        <AchievementCard  className={styles.carouselSlide} title="" />
        <AchievementCard  className={styles.carouselSlide} title="" />
        <AchievementCard  className={styles.carouselSlide} title="" />
        <AchievementCard  className={styles.carouselSlide} title="" />
        <AchievementCard  className={styles.carouselSlide} title="" />
        <AchievementCard  className={styles.carouselSlide} title="" />
      </div>
    </div>
  )
}

export default Achievements