import React, {Component} from 'react';
import Messages from "./Messages";
import {connect} from "react-redux";
import {AddMessage} from "../store/Messages-reducer";

class MessagesContainer extends Component {
    render() {
        return (
            <div>
               <Messages {...this.props} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dialogs: state.messagePage.dialogs,
        messages: state.messagePage.messages
    }
}

export default connect(mapStateToProps, {AddMessage})(MessagesContainer);