import React from 'react'
import styles from '../styles/components/ExpCard.module.scss'
import Image from 'next/image'


const ExpCard = (props) => {
    return (
        <div className={styles.ExpcardContainer}>
            <div className={styles.headwrap}>
                <div className={styles.title}>{props.title}</div>
                <Image className={styles.logo} src={props.logo}></Image>
            </div>
            <div className={styles.subTitle}>{props.subTitle}</div>
            <div className={styles.date}>{props.date}</div>
            <div className={styles.line}></div>
            <div className={styles.body}>{props.body}</div>


        </div>
    )
}

export default ExpCard