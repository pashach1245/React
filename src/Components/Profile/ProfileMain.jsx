import React from 'react';
import styles from './Profile.module.css';
import {changeAvatar} from "../store/Profile-reducer";

function ProfileMain(props) {

    const addPhoto = (e) => {
        if (e.target.files) {
            props.changeAvatar(e.target.files[0]);
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.main__photo}>
                <img className={styles.avatar}
                     src={props.profile.photos?.large ? props.profile.photos.large : 'https://placehold.it/200x200'}
                     alt=""/>
                {props.isOwner ? <div><input className={styles.changePhoto} onChange={(e) => addPhoto(e)} type="file"/></div> : ''}
            </div>
            <div className={styles.friends}>
                <div><span>Friends</span></div>
                <div className={styles.friends__list}>
                    <div className={styles.friends__item}>
                        <img className={styles.friends__photo} src="https://placehold.it/40x40" alt=""/>
                        <div><span>Name</span></div>
                    </div>
                    <div className={styles.friends__item}>
                        <img className={styles.friends__photo} src="https://placehold.it/40x40" alt=""/>
                        <div><span>Name</span></div>
                    </div>
                    <div className={styles.friends__item}>
                        <img className={styles.friends__photo} src="https://placehold.it/40x40" alt=""/>
                        <div><span>Name</span></div>
                    </div>
                    <div className={styles.friends__item}>
                        <img className={styles.friends__photo} src="https://placehold.it/40x40" alt=""/>
                        <div><span>Name</span></div>
                    </div>
                    <div className={styles.friends__item}>
                        <img className={styles.friends__photo} src="https://placehold.it/40x40" alt=""/>
                        <div><span>Name</span></div>
                    </div>
                    <div className={styles.friends__item}>
                        <img className={styles.friends__photo} src="https://placehold.it/40x40" alt=""/>
                        <div><span>Name</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileMain;
