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
        <p className={styles.aboutContent}>Hi, <span>I'm Vidit Chawda</span>, a Computer Science Engineering student at <span>G H Raisoni College of Engineering</span>. I am passionate about technology and its potential to create positive change in the world. I have a strong interest in <span>mentoring and leadership</span>, and I believe in empowering others to achieve their goals.

          As a <span>frontend developer</span>, I have a keen eye for design and aesthetics, and I enjoy creating beautiful and functional websites that provide an intuitive user experience. I am currently learning the <span>MERN stack</span>, and I am excited to apply my skills to build more complex web applications.

          Apart from technology, I am also an artist and I love to express my creativity through various mediums like <span>painting, sketching, and digital art</span>. Art has always been an integral part of my life, and it helps me to think outside the box and bring a fresh perspective to my work.

          Overall, I am a creative and motivated individual who enjoys tackling challenges and learning new things. I am always looking for opportunities to grow and develop my skills, and I believe that by working together, we can create a better world through technology.</p>
      </div>
    </div>
  )
}

export default About