import React from 'react';
import styles from './Login.module.css';
import style from '../../App.module.css';
import {Field, Form, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";

function Login(props) {
    const onSubmit = (data => {
        props.LoginThunk(data);
    })

    if (props.isAuth) return <Redirect to='/profile' />

    return (
        <div className={styles.login}>
            <LoginForm captchaURL={props.captchaURL} onSubmit={onSubmit}/>
        </div>
    );
}

let LoginForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} component={'input'} type={'text'} placeholder={'email'} className={styles.login__input}/>
            </div>
            <div>
                <Field name={'password'} component={'input'} type={'text'} placeholder={'password'} className={styles.login__input}/>
            </div>
            <div className={styles.login__error}>
                {props.error}
            </div>

            <div><label htmlFor="rememberMe">Remember me</label>
                <Field name={'rememberMe'} component={'input'} type={'checkbox'}/>
            </div>
            {props.captchaURL ? (<div>
                <img src={props.captchaURL} alt=""/>
                <Field name={'captcha'} component={'input'} type={'text'} placeholder={'captcha'} className={styles.login__input}/>
            </div>) : ''}
            <button type="submit" disabled={props.pristine || props.submitting} className={styles.login__btn}>Log in</button>
        </Form>
    )
}

LoginForm = reduxForm({
    form: 'login'
})(LoginForm);

export default Login;