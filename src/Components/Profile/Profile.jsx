import React from 'react';
import styles from './Profile.module.css';
import ProfileMain from "./ProfileMain";
import ProfileInfo from "./ProfileInfo";
import {changeAvatar} from "../store/Profile-reducer";

function Profile(props) {
    return (
        <div className={styles.profile}>
            <div className={styles.profile__main}>
                <ProfileMain profile={props.profile} isOwner={props.isOwner} changeAvatar={props.changeAvatar}/>
            </div>
            <div className={styles.profile__info}>
                <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status}
                             setStatus={props.setStatus} updateProfile={props.updateProfile}
                             posts={props.posts} addPost={props.addPost}/>
            </div>
        </div>
    );
}

export default Profile;