import React from 'react';
import {Field, Form, reduxForm} from "redux-form";
import styles from './Profile.module.css';
import Post from "./Post";

function Posts(props) {
    const posts = props.posts.map(post => <Post profile={props.profile} post={post}/>)

    const onSubmit = (value) => {
            props.addPost(value.postText);
    }

    return (
        <div>
            <PostForm onSubmit={onSubmit}/>
            <div className={styles.posts}>
                {posts}
            </div>
        </div>
    );
}

function PostForm(props) {
    return (
        <div>
            <Form onSubmit={props.handleSubmit} className={styles.post__form}>
                <Field className={styles.post__form__input} name={'postText'} component={'input'} type={'text'}
                       placeholder={'What\'s new'}/>
                <button type={'submit'} className={styles.btn__info}>Post</button>
            </Form>
        </div>
    );
}

PostForm = reduxForm({
    form: 'post'
})(PostForm);


export default Posts;