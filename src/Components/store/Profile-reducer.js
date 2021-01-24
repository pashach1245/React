import React from 'react';
import {changeAvatarApi, getProfileApi, getProfileStatusApi, setStatusApi, updateProfileInfoApi} from "../../API/api";
import {setMyPhotosActionCreator} from "./Auth-reducer";

const SET_PROFILE = 'SET_PROFILE';
const FETCHING = 'FETCHING';
const SET_STATUS = 'SET_STATUS';
const UPDATE_PROFILE = 'UPDATE_PROFILE';
const ADD_POST = 'ADD_POST';
const CHANGE_AVATAR = 'CHANGE_AVATAR';

const initial = {
    profile: {},
    status: '',
    isFetching: false,
    posts: [
        {id: 1, text: 'First post!!', likesCount: 12, commentsCount: 2},
        {id: 2, text: 'text post!!', likesCount: 5, commentsCount: 1},
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            likesCount: 12,
            commentsCount: 2
        },
    ]
}

function ProfileReducer(state = initial, action) {
    switch (action.type) {
        case FETCHING:
            return {...state, isFetching: !state.isFetching}
        case SET_PROFILE:
            return {...state, profile: action.profile, status: action.status}
        case SET_STATUS:
            return {...state, status: action.status}
        case UPDATE_PROFILE:
            return {...state, profile: action.profile}
        case ADD_POST:
            return {...state, posts: [...state.posts, action.post]}
        case CHANGE_AVATAR:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }
}

const ChangeFetchingActionCreator = () => {
    return {
        type: FETCHING
    }
}

const setProfileActionCreator = (profile, status) => {
    return {
        type: SET_PROFILE,
        profile,
        status
    }
}

const setStatusActionCreator = (status) => {
    return {
        type: SET_STATUS,
        status
    }
}

const updateProfileActionCreator = (profile) => {
    return {
        type: UPDATE_PROFILE,
        profile
    }
}

const addPostActionCreator = (text) => {
    return {
        type: ADD_POST,
        post: {
            id: 4,
            text,
            likesCount: 0,
            commentsCount: 0
        }
    }
}

const changeAvatarActionCreator = (photos) => {
    return {
        type: CHANGE_AVATAR,
        photos
    }
}

export const setProfile = (userId) => (dispatch) => {
    dispatch(ChangeFetchingActionCreator());
    Promise.all([getProfileApi(userId), getProfileStatusApi(userId)]).then(resp => {
        dispatch(setProfileActionCreator(resp[0], resp[1]));
        dispatch(ChangeFetchingActionCreator());
    })
}

export const setStatus = (newStatus) => (dispatch) => {
    setStatusApi(newStatus).then(resp => {
        if (resp.resultCode === 0) {
            dispatch(setStatusActionCreator(newStatus));
        }
    })

}

export const updateProfile = (profile) => (dispatch) => {
    return updateProfileInfoApi(profile).then(resp => {
        if (resp.resultCode === 0) {
            dispatch(updateProfileActionCreator(profile));
        }
    })
}

export const addPost = (text) => (dispatch) => {
    dispatch(addPostActionCreator(text));
}

export const changeAvatar = (photo) => (dispatch) => {
    changeAvatarApi(photo).then(resp => {
        if(resp.resultCode === 0) {
            dispatch(changeAvatarActionCreator(resp.data.photos));
            dispatch(setMyPhotosActionCreator((resp.data.photos)));
        }
    })
}

export default ProfileReducer;