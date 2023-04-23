import React from 'react'
import styles from '../styles/components/ExpCard.module.scss'
import Image from 'next/image'


const ExpCard = (props) => {
    return (
        <div className={styles.ExpcardContainer}>
            <div className={styles.headwrap}>
                <p className={styles.title}>{props.title}</p>
                <Image className={styles.logo} src={props.logo}></Image>
            </div>
            <p className={styles.subTitle}>{props.subTitle}</p>
            <p className={styles.date}>{props.date}</p>
            <p className={styles.line}></p>
            <p className={styles.body}>{props.body}</p>


        </div>
    )
}

export default ExpCard