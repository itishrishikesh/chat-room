import * as type from '../constants/ActionTypes'; 

const messages = (state = [], action) => {
    switch(action.type){
        case type.ADD_MESSAGE:
        case type.MESSAGE_RECEIVED:
            return state.concat([
                {
                    message: action.message,
                    author: action.author,
                    id: action.id
                }
            ]);
        default:
            return state;
    }
}

export default messages;