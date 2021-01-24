import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {addPost, changeAvatar, setProfile, setStatus, updateProfile} from "../store/Profile-reducer";
import WithAuthRedirect from "../HOC/WithAuthRedirect";

class ProfileContainer extends Component {

    componentDidMount() {
        let userId = this.props.match.params.id;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.setProfile(userId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            let userId = this.props.match.params.id;
            if (!userId) {
                userId = this.props.userId;
            }
            this.props.setProfile(userId);
        }
    }

    render() {
        if (this.props.isFetching) {
            return '...Loading'
        }
        return (
            <div>
                <Profile isOwner={this.props.isOwner} status={this.props.status} profile={this.props.profile}
                         setStatus={this.props.setStatus} updateProfile={this.props.updateProfile}
                         posts={this.props.posts} addPost={this.props.addPost} changeAvatar={this.props.changeAvatar}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.profilePage.isFetching,
        userId: state.auth.me.id,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        posts: state.profilePage.posts,
        isOwner: state.profilePage.profile.userId === state.auth.me.id
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {setProfile, setStatus, updateProfile, addPost, changeAvatar}),
    WithAuthRedirect
)(ProfileContainer);
