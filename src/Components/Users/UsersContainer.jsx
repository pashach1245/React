import React, {Component} from 'react';
import styles from './Users.module.css';
import Users from "./Users";
import {connect} from "react-redux";
import {followUser, setUsers, unFollowUser} from "../store/Users-reducer";

class UsersContainer extends Component {

    componentDidMount() {
        this.props.setUsers(this.props.users.count, this.props.users.page);
    }

    pageChanged (page) {
        this.props.setUsers(this.props.users.count, page);
    }

    render() {
        if(!this.props.users.users.length) return '...Loading';
        return (
            <div>
                <Users {...this.props} pageChanged={this.pageChanged.bind(this)}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage
    }
}

export default connect(mapStateToProps, {setUsers, followUser, unFollowUser})(UsersContainer);