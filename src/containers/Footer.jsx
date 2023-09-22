import React from 'react'
import styles from '../styles/containers/Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <p>Created by  <span> © Vidit Chawda</span>  |   2023  All  rights  reserved</p>
            <a href="#Home">BACK TO TOP</a>
        </div>
    )
}

export default Footer