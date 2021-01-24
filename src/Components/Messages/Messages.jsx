import React from 'react';
import styles from './Messages.module.css';
import DialogsList from "./DialogsList";
import MessageList from "./MessageList";

function Messages(props) {
    return (
        <div className={styles.messages}>
            <DialogsList dialogs={props.dialogs} />
            <MessageList messages={props.messages} addMessage={props.AddMessage}/>
        </div>
    );
}

export default Messages;