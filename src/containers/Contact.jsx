import React from 'react'
import { useForm } from 'react-hook-form'
import styles from '../styles/containers/Contact.module.scss'
import Heading from '@/components/Heading'


const Contact = () => {
    const { register, handleSubmit, } = useForm()
    return (
        <div className={styles.contactWrapper}>
            <Heading title="CONTACT" />
            <div className={styles.formWrapper}>
                <p>
                    Please Share your feedBack about the website
                </p>
                <form action="" className={styles.contactForm}>
                    <div className={styles.inputFields}>
                        <input className={styles.fields} {...register("name")} placeholder='Enter Your Name' />
                        <input className={styles.fields} {...register("email")} placeholder='Enter Your Email Address' />
                        <textarea className={styles.textarea} type="" placeholder='Type Your message' />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contact