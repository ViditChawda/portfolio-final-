import React from 'react'
import Image from 'next/image'
import pc from '../assets/projectCard.svg'
import an from '../assets/Frame 2.svg'
import styles from '../styles/components/ProjectCard.module.scss'
import {FaGithub} from 'react-icons/fa'

const ProjectCard = (props) => {
    return (
        <div className={styles.projectcardContainer}>
            <Image className={styles.projectcardImage} src={props.type ? pc : an}/>
            <div className={styles.projectCardWrapper}>
                <p className={styles.porjectTitle}>{props.title}</p>
                <p className={styles.line}></p>
                <p className={styles.projectDescription}>{props.des}</p>
                <p className={styles.projectStack}>{props.stack}</p>
                <p ><FaGithub className={styles.icons}/></p>
            </div>
        </div>
    )
}

export default ProjectCard