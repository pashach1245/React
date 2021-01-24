import React from 'react';
import styles from './Messages.module.css';
import {Field, Form, reduxForm} from "redux-form";

function MessageList(props) {

    const messages = props.messages.map(item => <MessageItem message={item.message}/>);

    const addMessage = (data) => {
        props.addMessage(data.newMessage);
    }

    return (
        <div>
            <div className={styles.messages__inner}>
                {messages}
            </div>
            <div className={styles.messages__form}>
                <MessageForm onSubmit={addMessage}/>
            </div>
        </div>

    );
}

const MessageItem = (props) => {
    return(
        <div className={styles.messages__item}>
            <img src={'https://placehold.it/50x50'} alt="" className={styles.messages__img}/>
            <div className={styles.messages__name}>
                <span>Name</span>
            </div>
            <div className={styles.messages__text}>
                <span>{props.message}</span>
            </div>
        </div>
    )
}

let MessageForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Field component={'input'} type={'text'} name={'newMessage'} placeholder={'Write a message'} className={styles.messages__input} />
            <button type="submit" disabled={props.pristine || props.submitting} className={styles.message__btn}>Send</button>
        </Form>
    )
}

MessageForm = reduxForm({
    form: 'message'
})(MessageForm);

export default MessageList;