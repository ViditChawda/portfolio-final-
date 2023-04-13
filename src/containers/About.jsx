import Heading from '@/components/Heading'
import React from 'react'
import styles from '../styles/containers/About.module.scss'
import Image from 'next/image'
import myImg from '../assets/my_img.png'

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <Heading title="About" />
      <div className={styles.aboutWrapper}>
        <Image className={styles.aboutImage} src={myImg} alt="" />
        <p className={styles.aboutContent}>Hi, <span>I'm Vidit Chawda</span>, a Computer Science Engineering student at <span>G H Raisoni College of Engineering</span>. I am passionate about technology and its potential to create positive change in the world. <br /> <br/> I have a strong interest in <span>mentoring and leadership</span>, and I believe in empowering others to achieve their goals.

          As a <span>frontend developer</span>. <br /> <br /> I am currently learning the <span>MERN stack</span>, and I am excited to apply my skills to build web applications. <br /> <br />

          Apart from technology, I am also an artist and I love to express my creativity through various mediums like <span>painting, sketching, and digital art</span>.

          Overall, I am a creative and motivated individual who enjoys tackling challenges and learning new things. I am always looking for opportunities to grow and develop my skills, and I believe that by working together, we can create a better world through technology.</p>
      </div>
    </div>
  )
}

export default About