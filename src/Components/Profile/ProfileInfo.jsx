import React, {useEffect, useState} from 'react';
import styles from './Profile.module.css';
import Posts from "./Posts";
import ProfileInfoForm from "./ProfileInfoForm";

function ProfileInfo(props) {

    const [editMode, setEditMode] = useState(false);
    const [editModeInfoForm, setEditModeInfoForm] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status])

    const changeStatus = () => {
        props.setStatus(status);
        setEditMode(false);
    }

    const changeStatusText = (e) => {
        setStatus(e.target.value);
    }

    const changeProfile = (profile) => {
        props.updateProfile(profile).then(() => {
            setEditModeInfoForm(false);
        })
    }

    return (
        <div className={styles.info}>
            <div className={styles.my__info}>
                <div className={styles.name}><span>{props.profile.fullName}</span></div>

                {props.isOwner ? editMode ? <input onBlur={() => changeStatus()} onChange={(e) => changeStatusText(e)}
                                                   className={styles.status__input} autoFocus type="text"
                                                   value={status}/> :
                    <div onClick={() => setEditMode(true)} className={styles.status}>
                        <span>{status ? status : 'set status'}</span></div> :
                    <div className={styles.status}><span>{status ? status : ''}</span></div>
                }

                {editModeInfoForm ? <ProfileInfoForm onSubmit={changeProfile} initialValues={props.profile}/> :
                    <ProfileInformation setEditModeInfoForm={setEditModeInfoForm} isOwner={props.isOwner} profile={props.profile}/>}

            </div>
            <div className={styles.posts}>
                <Posts posts={props.posts} profile={props.profile} addPost={props.addPost}/>
            </div>
        </div>
    );
}

const ProfileInformation = (props) => {
    return (
        <div className={styles.information}>
            <div className={styles.information__item}>
                <span className={styles.item__title}>About me:</span><span>{props.profile.aboutMe}</span>
            </div>
            <div className={styles.information__item}>
                        <span
                            className={styles.item__title}>Looking for a job:</span><span>{props.profile.lookingForAJob ? 'Yes' : 'No'}</span>
            </div>
            <div className={styles.information__item}>
                        <span
                            className={styles.item__title}>Description skills:</span><span>{props.profile.lookingForAJobDescription}</span>
            </div>
            <div className={styles.contacts}>
                <h4 className={styles.contacts__title}>Contacts</h4>
                <div className={styles.information__item}><span
                    className={styles.item__title}>Vk:</span><span>{props.profile.contacts?.vk}</span></div>
                <div className={styles.information__item}><span
                    className={styles.item__title}>Instagram:</span><span>{props.profile.contacts?.instagram}</span>
                </div>
            </div>
            {props.isOwner ? <div>
                <button onClick={() => props.setEditModeInfoForm(true)} className={styles.btn__info}>Edit</button>
            </div> : ''}
        </div>
    )
}

export default ProfileInfo;