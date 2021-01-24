import React from 'react';
import styles from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";
import {NavLink} from "react-router-dom";
import {followUser, unFollowUser} from "../store/Users-reducer";

function Users(props) {

    const users = props.users.users.map(user => <User follow={props.followUser} unFollow={props.unFollowUser} user={user}/>);

    return (
        <div className={styles.users__page}>
            <Paginator {...props.users} pageChanged={props.pageChanged}/>
            <div className={styles.users}>
                {users}
            </div>
        </div>
    );
}

const User = (props) => {
    return (
        <div className={styles.user}>
            <NavLink to={`/profile/${props.user.id}`}><img className={styles.user__img}
                                                           src={props.user.photos?.small ? props.user.photos.small : 'https://placehold.it/80x80'}
                                                           alt=""/></NavLink>
            <div>
                <NavLink to={`/profile/${props.user.id}`} className={styles.user__name}>{props.user.name}</NavLink>
            </div>
            <div className={styles.user__status}>{props.user.status}</div>
            <div className={styles.user__follow}>
                {props.user.followed ? <button className={styles.follow__btn} onClick={() => { props.unFollow(props.user.id) }}>unfollow</button> : <button className={styles.follow__btn} onClick={() => { props.follow(props.user.id) }}>follow</button>}
            </div>
        </div>
    )
}

export default Users;