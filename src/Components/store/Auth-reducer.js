import React from 'react';
import {AuthmeApi, getCaptchaApi, getProfileApi, LoginApi, LogoutApi} from "../../API/api";
import {setProfile} from "./Profile-reducer";
import {stopSubmit} from "redux-form";

const AUTH_ME = 'AUTH_ME';
const SET_MY_PHOTOS = 'SET_MY_PHOTOS';
const SET_CAPTCHA = 'SET_CAPTCHA';
const LOG_OUT = 'LOG_OUT';

const initial = {
    isAuth: false,
    me: {
        id: null,
        email: null,
        login: null
    },
    photos: null,
    captchaURL: null
}

function AuthReducer(state = initial, action) {
    switch (action.type) {
        case AUTH_ME:
            return {...state, me: {id: action.id, email: action.email, login: action.login}, isAuth: true}
        case SET_MY_PHOTOS:
            return {...state, photos: action.photos}
        case SET_CAPTCHA:
            return {...state, captchaURL: action.captchaURL}
        case LOG_OUT:
            return {...state, isAuth: false, me: {id: null, email: null, login: null}, photos: null}
        default :
            return state
    }
}

const AuthMeActionCreator = (me) => {
    return {
        type: AUTH_ME,
        id: me.id,
        email: me.email,
        login: me.login,
    }
}

const setCaptchaActionCreator = (captchaURL) => {
    return {
        type: SET_CAPTCHA,
        captchaURL
    }
}

const logOutActionCreator = () => {
    return {
        type: LOG_OUT
    }
}


export const setMyPhotosActionCreator = (photos) => {
    return {
        type: SET_MY_PHOTOS,
        photos
    }
}

export const AuthMe = () => (dispatch) => {
    return AuthmeApi().then(resp => {
        if (resp.resultCode === 0) {
            dispatch(AuthMeActionCreator(resp.data));
            getProfileApi(resp.data.id).then(resp => {
                dispatch(setMyPhotosActionCreator(resp.photos));
            })
        }
    })
}

export const LoginThunk = (data) => (dispatch) => {
    LoginApi(data.email, data.password, data.rememberMe, data.captcha).then(resp => {
        if (resp.resultCode === 0) {
            dispatch(AuthMe());
        } else {
            if (resp.resultCode === 10) {
                getCaptchaApi().then(resp => {
                    dispatch(setCaptchaActionCreator(resp.url))
                })
            }
            let action = stopSubmit('login', {_error: resp.messages[0]});
            dispatch(action);
        }
    } )
}

export const Logout = () => (dispatch) => {
    LogoutApi().then(resp => {
        if (resp.resultCode === 0) {
            dispatch(logOutActionCreator());
        }
    })
}

export default AuthReducer;