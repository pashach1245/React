import React, {Component} from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {LoginThunk} from "../store/Auth-reducer";
import {Redirect} from "react-router-dom";

class LoginContainer extends Component {

    render() {
        if (this.props.isAuth) return <Redirect to='/profile'/>
        return (
            <div>
                <Login {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        captchaURL: state.auth.captchaURL,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {LoginThunk})(LoginContainer);