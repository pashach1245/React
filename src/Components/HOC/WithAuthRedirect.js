import React from 'react';
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

function WithAuthRedirect(Component) {

    class WithAuthRedirectContainer extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props} />
        }
    }

    WithAuthRedirectContainer = connect(mapStateToProps, {})(WithAuthRedirectContainer);
    return WithAuthRedirectContainer;
}

export default WithAuthRedirect;