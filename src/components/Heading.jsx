import React from 'react'
import styles from '../styles/components/Heading.module.scss'
import { motion } from 'framer-motion'

const Heading = (props) => {
  return (
    <div className={styles.heading}>
      <p className={styles.line}></p>
      <p>{props.title}</p>
      <p className={styles.line}></p>
    </div>
  )
}

export default Heading