import {applyMiddleware, combineReducers, createStore} from "redux";
import ProfileReducer from "./Profile-reducer";
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import AuthReducer from "./Auth-reducer";
import AppReducer from "./App-reducer";
import MessagesReducer from "./Messages-reducer";
import UsersReducer from "./Users-reducer";

const reducers = combineReducers({
    profilePage: ProfileReducer,
    messagePage: MessagesReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    app: AppReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;