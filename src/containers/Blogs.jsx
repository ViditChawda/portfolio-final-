import React from 'react'
import styles from '../styles/containers/Blogs.module.scss'
import Heading from '@/components/Heading'
import Image from 'next/image'
import blog from '../assets/blog.png'
import {BsMedium} from 'react-icons/bs'
import {BsHandThumbsUp} from 'react-icons/bs'
import {BsArrowUpRightSquare} from 'react-icons/bs'
const Blogs = () => {
    return (
        <div className={styles.blogContainer}>
            <Heading title="BLOGS" />
            <div className={styles.blogWrap}>
                <div >
                    <Image className={styles.image} src={blog}/>
                </div>
                <div className={styles.description}>
                    {/* <p>First Blog</p> */}
                    <p className={styles.title}>Hack The Stack</p>
                    <p className={styles.body}>Stack is a data structure that can easily be explained and understood because there are many real-life examples available that you see daily and can easily relate to. The stack can be explained in easy words just imagine a box which is open from the top...</p>
                    <p className={styles.tags}>C++ | Object Oriented Programming | Data Structres</p>
                    <div className={styles.icons}><BsMedium/> <BsHandThumbsUp/> <BsArrowUpRightSquare/> </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs