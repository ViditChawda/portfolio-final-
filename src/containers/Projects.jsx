import Heading from '@/components/Heading'
import React from 'react'
import styles from '../styles/containers/Projects.module.scss'
import ProjectCard from '@/components/ProjectCard'

function Projects() {
  return (
    <div className={styles.projectsContainer}>
        <Heading title="PROJECTS"/>
        <ProjectCard/>
    </div>
  )
}

export default Projects