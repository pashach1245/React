import React from 'react';
import styles from './Messages.module.css';
import {NavLink} from "react-router-dom";

function DialogsList(props) {

    const dialogs = props.dialogs.map(item => <DialogsItem id={item.id} name={item.name}/>);

    return (
        <div className={styles.dialogs}>
            <ul className={styles.dialogs__inner}>
                {dialogs}
            </ul>
        </div>
    );
}

const DialogsItem = (props) => {
    return (
        <li className={styles.dialogs__item}>
            <NavLink className={styles.dialogs__item__link} to={`/messages/${props.id}`}>{props.name}</NavLink>
        </li>
    )
}

export default DialogsList;