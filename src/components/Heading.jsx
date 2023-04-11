import React from 'react'
import styles from '../styles/components/Heading.module.scss'

const Heading = (props) => {
  return (
    <div className='headingMain'>
        <div></div>
        <p>{props.title}</p>
        <div></div>
    </div>
  )
}

export default Heading