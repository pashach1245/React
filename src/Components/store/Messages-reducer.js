const initial = {
    dialogs: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Victor'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Tolya'},
    ],
    messages: [
        {id: 1, message: 'Lorem ipsum dolor sit amet.'},
        {id: 2, message: 'Lorem ipsum dolor sit amet.'},
        {id: 3, message: 'Lorem ipsum dolor sit amet.'},
        {id: 4, message: 'Lorem ipsum dolor sit amet.'},
        {id: 5, message: 'Lorem ipsum dolor sit amet.'},
    ]
}

const ADD_MESSAGE = 'ADD_MESSAGE';

function MessagesReducer(state = initial, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state, messages: [...state.messages, action.message]}
        default:
            return state;
    }
}

const AddMessageActionCreator = (message) => {
    return {
        type: ADD_MESSAGE,
        message: {
            id: 6, message
        }
    }
}

export const AddMessage = (message) => (dispatch) => {
    dispatch(AddMessageActionCreator(message));
}

export default MessagesReducer;