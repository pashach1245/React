import React from 'react';
import {Field, Form, reduxForm} from "redux-form";
import styles from './Profile.module.css';

function ProfileInfoForm(props) {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div className={styles.information__item}>
                <label className={styles.item__title} htmlFor="aboutMe">About me</label>
                <Field name="aboutMe" component="input" type="text" />
            </div>
            <div className={styles.information__item}>
                <label className={styles.item__title} htmlFor="lookingForAJob">Looking for a job</label>
                <Field name="lookingForAJob" component="input" type="checkbox" />
            </div>
            <div className={styles.information__item}>
                <label className={styles.item__title} htmlFor="lookingForAJobDescription">Description skills</label>
                <Field name="lookingForAJobDescription" component="input" type="text" />
            </div>
            <div className={styles.information__item}>
                <label className={styles.item__title} htmlFor="contacts.vk">Vk</label>
                <Field name="contacts.vk" component="input" type="text" />
            </div>
            <div className={styles.information__item}>
                <label className={styles.item__title} htmlFor="contacts.instagram">Instagram</label>
                <Field name="contacts.instagram" component="input" type="text" />
            </div>
            <button className={styles.btn__info} type="submit">Submit</button>
        </Form>
    );
}

ProfileInfoForm = reduxForm({
    form: 'information'
})(ProfileInfoForm);

export default ProfileInfoForm;