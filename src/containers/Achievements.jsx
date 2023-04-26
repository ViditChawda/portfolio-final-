import Heading from '@/components/Heading'
import React, {useRef} from 'react'
import styles from '../styles/containers/Achievements.module.scss'
import AchievementCard from '@/components/AchievementCard'
import Slider from 'react-slick';
import oops from '../assets/oops1.png'
import sih from '../assets/sih1.png'

function Achievements() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };
  const containerRef = useRef(null);

  function scrollToSlide(slideNumber) {
    const container = containerRef.current;
    const slide = container.children[slideNumber];
    slide.scrollIntoView({ behavior: "smooth" });
  }
  return (

    <div className={styles.achContainer}>
      <Heading title="ACHIEVEMENT" />
      <div className={styles.achWrapper} ref={containerRef}>
        <AchievementCard className={styles.carouselSlide} image={sih} title="Joint Winner" subTitle="Smart India Hackthon" body="Hello everyone, Really happy to share that we stood 1st and won 1 lakh cash prize in smart India hackathon in one of the aicte problem statement, It overall was a great experience.

I would really like to thank CHANDIGARH UNIVERSITY for great hospitality and
for providing us such a great environment to work.
"/>
        <AchievementCard className={styles.carouselSlide} image={oops} title="Joint Winner" subTitle="Smart India Hackthon" body="Hello everyone, Really happy to share that we stood 1st and won 1 lakh cash prize in smart India hackathon in one of the aicte problem statement, It overall was a great experience.

I would really like to thank CHANDIGARH UNIVERSITY for great hospitality and
for providing us such a great environment to work.
"/>
        <AchievementCard className={styles.carouselSlide} image={sih} title="Joint Winner" subTitle="Smart India Hackthon" body="Hello everyone, Really happy to share that we stood 1st and won 1 lakh cash prize in smart India hackathon in one of the aicte problem statement, It overall was a great experience.

I would really like to thank CHANDIGARH UNIVERSITY for great hospitality and
for providing us such a great environment to work.
"/>
        <AchievementCard className={styles.carouselSlide} image={sih} title="Joint Winner" subTitle="Smart India Hackthon" body="Hello everyone, Really happy to share that we stood 1st and won 1 lakh cash prize in smart India hackathon in one of the aicte problem statement, It overall was a great experience.

I would really like to thank CHANDIGARH UNIVERSITY for great hospitality and
for providing us such a great environment to work.
"/>
        <AchievementCard className={styles.carouselSlide} image={sih} title="Joint Winner" subTitle="Smart India Hackthon" body="Hello everyone, Really happy to share that we stood 1st and won 1 lakh cash prize in smart India hackathon in one of the aicte problem statement, It overall was a great experience.

I would really like to thank CHANDIGARH UNIVERSITY for great hospitality and
for providing us such a great environment to work.
"/>
      </div>
      <div className="carousel-nav">
        <button onClick={() => scrollToSlide(0)}>Slide 1</button>
        <button onClick={() => scrollToSlide(1)}>Slide 2</button>
        <button onClick={() => scrollToSlide(2)}>Slide 3</button>
        <button onClick={() => scrollToSlide(3)}>Slide 3</button>
        <button onClick={() => scrollToSlide(4)}>Slide 3</button>
      </div>
    </div>
  )
}

export default Achievements