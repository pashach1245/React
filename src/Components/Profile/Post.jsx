import React from 'react';
import styles from './Profile.module.css';
import like from '../../assets/images/like.png';
import comment from '../../assets/images/comment.png';


function Post(props) {
    return (
        <div className={styles.post}>
            <div>
                <img className={styles.post__img} src={props.profile.photos?.small ? props.profile.photos?.small : 'https://placehold.it/50x50'} alt=""/>
                <span>{props.profile.fullName}</span>
            </div>
            <div className={styles.post__text}><span>{props.post.text}</span></div>
            <div className={styles.post__info}>
                <div className={styles.post__info__item}>
                    <img src={like} alt="" className={styles.post__info__icon}/>
                    <span>{props.post.likesCount}</span>
                </div>
                <div className={styles.post__info__item}>
                    <img src={comment} alt="" className={styles.post__info__icon}/>
                    <span>{props.post.commentsCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;