import React from 'react'
import styles from '../styles/containers/Blogs.module.scss'
import Heading from '@/components/Heading'
import Image from 'next/image'
import blog from '../assets/blog.png'
import dsc from '../assets/dsc1.jpg'
import youtube from '../assets/youtube.png'
import asj from '../assets/asj.png'
import {BsMedium} from 'react-icons/bs'
import {BsHandThumbsUp} from 'react-icons/bs'
import {BsArrowUpRightSquare} from 'react-icons/bs'
import {AiOutlineYoutube} from 'react-icons/ai'
const Blogs = () => {
    return (
        <div className={styles.blogContainer}>
            <Heading title="CONTENT" />
            <div className={styles.blogWrap}>
                <div >
                    <Image className={styles.image} src={blog}/>
                </div>
                <div className={styles.description}>
                    {/* <p>First Blog</p> */}
                    <p className={styles.title}>Hack The Stack</p>
                    <p className={styles.body}>Stack is a data structure that can easily be explained and understood because there are many real-life examples available that you see daily and can easily relate to. The stack can be explained in easy words just imagine a box which is open from the top...</p>
                    <p className={styles.tags}>C++ | Object Oriented Programming | Data Structres</p>
                    <div className={styles.icons}> <BsArrowUpRightSquare/> <BsMedium/> </div>
                </div>
            </div>
            <div className={styles.blogWrap}>
                <div >
                    <Image className={styles.image} src={youtube}/>
                </div>
                <div className={styles.description}>
                    {/* <p>First Blog</p> */}
                    <p className={styles.title}>OOPs Refresher</p>
                    <p className={styles.body}>I taught Object oriented programming virtually through a google meet to my peers and juniors of the college. it was a one shot session where all the topics of oops are covered that pre required for learning data structures and algorithms</p>
                    <p className={styles.tags}>C++ | Object Oriented Programming | Data Structres</p>
                    <div className={styles.icons}> <BsArrowUpRightSquare/> <AiOutlineYoutube/> </div>
                </div>
            </div>
            <div className={styles.blogWrap}>
                <div >
                    <Image className={styles.image} src={asj}/>
                </div>
                <div className={styles.description}>
                    {/* <p>First Blog</p> */}
                    <p className={styles.title}>Android Study Jams</p>
                    <p className={styles.body}>I was the facilitator of the Android Study Jams the progrma lead by GDSC INDIA. Where i conducted three session, 1st session - The basics of kotlin, 2nd session - Advance concepts of kotlin, 3rd session - Creating a simple birthday card app in Android Studio. more than 100 students attended the live sessions</p>
                    <p className={styles.tags}>Kotlin | Android | Android Studio</p>
                    <div className={styles.icons}> <BsArrowUpRightSquare/> <AiOutlineYoutube/> </div>
                </div>
            </div>
            <div className={styles.blogWrap}>
                <div >
                    <Image className={styles.image} src={dsc}/>
                </div>
                <div className={styles.description}>
                    {/* <p>First Blog</p> */}
                    <p className={styles.title}>DSA WITH GDSC</p>
                    <p className={styles.body}>Stack is a data structure that can easily be explained and understood because there are many real-life examples available that you see daily and can easily relate to. The stack can be explained in easy words just imagine a box which is open from the top...</p>
                    <p className={styles.tags}>C++ | Arrays | LeetCode</p>
                    <div className={styles.icons}> <BsArrowUpRightSquare/> <AiOutlineYoutube/> </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs