import React from 'react';
import {AuthMe} from "./Auth-reducer";

const INITIAL = 'INITIAL';

const initial = {
    isInitial: false
}

function AppReducer(state = initial, action) {
    switch (action.type) {
        case INITIAL:
            return {...state, isInitial: true}
        default:
            return state;
    }
}

const InitialActionCreator = () => {
    return {
        type: INITIAL
    }
}

export const InitialApp = () => async (dispatch) => {
    await dispatch(AuthMe());
    dispatch(InitialActionCreator());
}

export default AppReducer;