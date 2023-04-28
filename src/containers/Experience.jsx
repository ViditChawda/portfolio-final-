import React from 'react'
import styles from '../styles/containers/Experience.module.scss'
import Heading from '@/components/Heading'
import ExpCard from '@/components/ExpCard'
import gdsclogo from '../assets/gdsclogo.png'
import gdg from '../assets/unamed.png'
import android from '../assets/android.png'

function Experience() {
    return (
        <div id='experience' className={styles.expContainer}>
            <Heading title="EXPERIENCE" />
            <div className={styles.expWrapper}>
                <div className={styles.one}> <ExpCard title="> LEAD" subTitle="Google Developers Students Club" date="July 2022" body="I am the lead of the google developers students club at my college, i have good exeprience of managing and coducting the technical events " logo={gdsclogo} /> </div>
                <div className={styles.two}> <ExpCard title="> ANDROID FACLITATOR" subTitle="Google Developers Students Club" date="Jan 2021" body="I facilitated the android styu jams in my college, where i conducted three live sessions on android app developemnt using Kotlin " logo={android} /></div>
                <div className={styles.three}> <ExpCard title="> EXECUTIVE COMMITTEE" subTitle="Google Developers Students Club" date="Aug 2021" body="Executive committee member of the google devvelopes student club, I have written a blog which was published by the GDSC GHRCE in medium" logo={gdsclogo} /></div>

            </div>
        </div>
    )
}

export default Experience