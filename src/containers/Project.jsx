import Heading from '@/components/Heading'
import React from 'react'
import styles from '../styles/containers/Projects.module.scss'
import ProjectCard from '@/components/ProjectCard'

function Projects() {
  return (
    <div id='Projects' className={styles.projectsContainer}>
      <Heading title="PROJECTS" />
      <div className={styles.projectWrapper} data-aos="fade-up">
        <ProjectCard className={styles.card} title="portfolio-final- " type={true} des=" It is a portfolio website that has all the information about my acievements, projects and experience etc." stack="Next.js | javaScript | HTML | CSS" />
        <ProjectCard className={styles.card} title="coding-challenege-ReactJS-" type={true} des="It is a crud application Website. which was made by as an assignment of the internship shortlistining round" stack="Node.js | javaScript | HTML | CSS" />
        <ProjectCard className={styles.card} title="node-note-app" type={true} des="It is a Notes appliction made with node js CRUD operations are performed. All the operations are performed on Terminal complete backend" stack="Next.js | Vs-Code " />
      </div>
      <div className={styles.projectWrapper} data-aos="fade-up">
        <ProjectCard className={styles.card} title="my-portfolio-" type={true} des=" It is a portfolio website that has all the information about my acievements, projects and experience etc." stack="Next.js | TypeScript | Tailwind CSS" />
        <ProjectCard className={styles.card} title="Mars-exploration" type={true} des=" It is a simple react website that displays the input name of the user in an alert as welcome and the inputed name" stack="Next.js | javaScript | HTML | CSS" />
        <ProjectCard className={styles.card} title="paiinting_website " type={true} des="It is a simple UI that displays the paintings of an artist in a beautiful way. Digital art gallery of an artist to display his art work" stack=" javaScript | HTML | CSS" />
      </div>
      <div className={styles.projectWrapper} data-aos="fade-up">
        <ProjectCard className={styles.card} title="meme-app" type={false} des="It is a meme app that displays a new meme every time the button has been clicked. The new meme is being fetched every time by an API" stack="Android Studio | kotlin | XML" />
        <ProjectCard className={styles.card} title="Notes-App" type={false} des=" It is a Three pages application which is used to create notes, delete, update, read the notes" stack="Android Studio | kotlin | XML" />
      </div>

    </div>
  )
}

export default Projects