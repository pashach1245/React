import React, {Component} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {Logout} from "../store/Auth-reducer";

class HeaderContainer extends Component {
    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        photo: state.auth.photos?.small,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {Logout})(HeaderContainer);
