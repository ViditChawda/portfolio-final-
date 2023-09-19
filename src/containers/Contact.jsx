import React from 'react'
import { useForm } from 'react-hook-form'
import styles from '../styles/containers/Contact.module.scss'
import Heading from '@/components/Heading'

import { collection, addDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";


const Contact = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = async (data) => {
        const { name, email, message } = data;
        console.log(name + email + message);

        const res = fetch("https://portfolio-d1847-default-rtdb.firebaseio.com/feedback.json", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                message
            })
        })

        if (res) {
            alert("Thank you for submitting your feedback")
            reset();
        } else {
            alert("plz fill the data")
        }
    }

    return (
        <div id='Contacts' className={styles.contactWrapper}>
            <Heading title="GET IN TOUCH" />
            <div className={styles.formWrapper}>
                <p>
                    Your Feedback
                </p>
                <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputFields}>
                        <input className={styles.fields} {...register("name")} placeholder='Enter Your Name' />
                        <input className={styles.fields} {...register("email")} placeholder='Enter Your Email Address' />
                        <textarea className={styles.textarea} {...register("message")} type="" placeholder='Type Your message' />
                        <button type='submit' className={styles.submitButton}>Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contact