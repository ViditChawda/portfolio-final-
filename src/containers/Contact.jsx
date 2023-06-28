import React from 'react'
import { useForm } from 'react-hook-form'
import styles from '../styles/containers/Contact.module.scss'
import Heading from '@/components/Heading'


const Contact = () => {
    const { register, handleSubmit, } = useForm()
    const onSubmit = () => {

    }
    return (
        <div id='Contacts' className={styles.contactWrapper}>
            <Heading title="CONTACT" />
            <div className={styles.formWrapper}>
                <p>
                    Your Feedback
                </p>
                <form action="" className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputFields}>
                        <input className={styles.fields} {...register("name")} placeholder='Enter Your Name' />
                        <input className={styles.fields} {...register("email")} placeholder='Enter Your Email Address' />
                        <textarea className={styles.textarea} type="" placeholder='Type Your message' />
                        <button className={styles.submitButton}>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contact