import {followUserApi, getUsersApi, unFollowUserApi} from "../../API/api";
import {act} from "@testing-library/react";

const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initial = {
    users: [],
    page: 1,
    count: 10,
    totalCount: 0
}

function UsersReducer(state = initial, action) {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: action.users, totalCount: action.totalCount}
        case SET_CURRENT_PAGE:
            return {...state, page: action.page}
        case FOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        user.followed = true;
                        return user;
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        user.followed = false;
                        return user;
                    }
                    return user;
                })
            }
        default:
            return state;
    }
}

const setUsersActionCreator = (users, totalCount) => {
    return {
        type: SET_USERS,
        users,
        totalCount
    }
}

const setCurrentPageActionCreator = (page) => {
    return {
        type: SET_CURRENT_PAGE,
        page
    }
}

const followUserActionCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

const unFollowUserActionCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsers = (count, page) => (dispatch) => {
    getUsersApi(count, page).then(resp => {
        dispatch(setUsersActionCreator(resp.items, resp.totalCount));
        dispatch(setCurrentPageActionCreator(page));
    })
}

export const followUser = (userId) => (dispatch) => {
    followUserApi(userId).then(resp => {
        if (resp.resultCode === 0) {
            dispatch(followUserActionCreator(userId));
        }
    })
}

export const unFollowUser = (userId) => (dispatch) => {
    unFollowUserApi(userId).then(resp => {
        if (resp.resultCode === 0) {
            dispatch(unFollowUserActionCreator(userId));
        }
    })
}

export default UsersReducer;