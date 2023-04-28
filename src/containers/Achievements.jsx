import Heading from '@/components/Heading'
import React, { useRef } from 'react'
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

    <div data-aos="fade-up" id='Achievement' className={styles.achContainer}>
      <Heading title="ACHIEVEMENT" />
      <div className={styles.achWrapper} ref={containerRef}>
        <AchievementCard className={styles.carouselSlide} image={oops} title="Speaker Session : " subTitle="Speaker Session (OOPs)" body="I was the speaker in the college event where i gave a talk on object-oriented programming (OOP) concepts related to constructors, destructors, classes, and objects. The session was both informative and engaging for the attendees,

I began by introducing the concept of classes and objects. A class is a blueprint for creating objects, and objects are instances of a class. I explained how classes can have methods, attributes, and properties, and how objects can interact with each other using these methods.

Next, the speaker discussed the importance of constructors and destructors. A constructor is a special method that is called when an object is created, and it is used to initialize the object's properties. The destructor, on the other hand, is called when an object is destroyed and is used to clean up any resources the object was using.
" date="Aug 2022" />
        <AchievementCard className={styles.carouselSlide} image={sih} title="Joint Winner : " subTitle="Smart India Hackthon" body="My team has won the Smart India Hackathon in the problem statement of enhancing the UI of the AICTE website. My team's hard work and dedication has paid off, and we emerged as the champions among several participants.

The Smart India Hackathon is a platform that provides an opportunity for young minds to showcase their technical skills and innovative ideas. My team's solution has impressed the judges and highlighted your potential to make a difference in the field of technology.

Winning the first prize worth one lakh rupees is a great reward for your efforts and reflects your team's excellence. You have proven your ability to work collaboratively and creatively to solve real-world problems using technology.

The hackathon center being held at Chandigarh University adds to the significance of the victory. 
" date="Aug 2022" />

        <AchievementCard className={styles.carouselSlide} image={sih} title="Facilitator ASJ : " subTitle="Smart India Hackthon" body="Hello everyone, Really happy to share that we stood 1st and won 1 lakh cash prize in smart India hackathon in one of the aicte problem statement, It overall was a great experience.

I would really like to thank CHANDIGARH UNIVERSITY for great hospitality and
for providing us such a great environment to work.
" date="Aug 2022" />

      </div>
      <div className={styles.carouselNav}>
        <div className={styles.arrow}>{`<----- Swipe Right`}</div>
        <button className={styles.button} onClick={() => scrollToSlide(0)}></button>
        <button className={styles.button} onClick={() => scrollToSlide(1)}></button>
        <button className={styles.button} onClick={() => scrollToSlide(2)}></button>
        <div className={styles.arrow}>{'Swipe left ----->'}</div>
      </div>
    </div>
  )
}

export default Achievements