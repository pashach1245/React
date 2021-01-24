import React, {Component} from 'react';
import styles from './App.module.css';
import {BrowserRouter, Route} from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {connect} from "react-redux";
import {InitialApp} from "./Components/store/App-reducer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import MessagesContainer from "./Components/Messages/MessagesContainer";
import UsersContainer from "./Components/Users/UsersContainer";

class AppContainer extends Component {
    componentDidMount() {
        this.props.InitialApp();
    }

    render() {
        if (!this.props.isInitial) {
            return '...Loading'
        };
        return (<App/>);
    }
}

function App(props) {
    return (
        <BrowserRouter>
            <div className={styles.page}>
                <div className={styles.header}>
                    <HeaderContainer/>
                </div>
                <div className={styles.content}>
                    <Route exact path='/' render={() => <ProfileContainer/>} />
                    <Route path='/profile/:id?' render={() => <ProfileContainer/>} />
                    <Route path='/login' render={() => <LoginContainer/>} />
                    <Route path='/messages' render={() => <MessagesContainer/>} />
                    <Route path='/users' render={() => <UsersContainer />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = (state) => {
    return {
        isInitial: state.app.isInitial
    }
}

export default connect(mapStateToProps, {InitialApp})(AppContainer);