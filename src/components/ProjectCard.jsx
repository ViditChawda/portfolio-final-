import React from 'react'
import Image from 'next/image'
import pc from '../assets/projectCard.svg'
import styles from '../styles/components/ProjectCard.module.scss'

const ProjectCard = () => {
    return (
        <div className={styles.projectcardContainer}>
            <Image src={pc} />
        </div>
    )
}

export default ProjectCard