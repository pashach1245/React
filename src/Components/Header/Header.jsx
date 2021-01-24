import React from 'react';
import styles from './Header.module.css';
import profile from '../../assets/images/user.png';
import users from '../../assets/images/users.png';
import message from '../../assets/images/message.png';
import logo from '../../assets/images/logo.png';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <div className={styles.header}>
            <div>
                <img className={styles.logo} src={logo} alt=""/>
            </div>
            <nav className={styles.nav}>
                <div className={styles.nav__item}>
                    <img className={styles.nav__icon} src={profile} alt=""/>
                    <NavLink className={styles.nav__link} to={'/profile'}>Profile</NavLink>
                </div>
                <div className={styles.nav__item}>
                    <img className={styles.nav__icon} src={users} alt=""/>
                    <NavLink className={styles.nav__link} to={'/messages'}>Messages</NavLink>
                </div>
                <div className={styles.nav__item}>
                    <img className={styles.nav__icon} src={message} alt=""/>
                    <NavLink className={styles.nav__link} to={'/users'}>Users</NavLink>
                </div>
            </nav>
            <div className={styles.header__me}>
                <img src={props.photo ? props.photo : 'https://placehold.it/60x60'} alt="" className={styles.photo}/>
                {props.isAuth ? <button onClick={ () => { props.Logout() }} className={styles.logOut__btn}>Log out</button> : ''}
            </div>
        </div>
    );
}

export default Header;