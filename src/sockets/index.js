import * as types from "../constants/ActionTypes";
import {addUser, messageReceived, populateUsersList} from '../action/index';

const socket = new WebSocket('ws://localhost:3001');

const setupSocket = (dispatch, username) => {

    socket.onopen = () => {
        socket.send(JSON.stringify({
            type: types.ADD_USER,
            name: username
        }))
    }
    socket.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log("Data here: ", data);
        switch(data.type) {
            case types.ADD_MESSAGE:
                dispatch(messageReceived(data.message, data.author));
                break;
            case types.ADD_USER:
                dispatch(addUser(data.name));
                break;
            case types.USER_LIST:
                dispatch(populateUsersList(data.users));
                break;
            default:
                break;
        }
    }

    return socket;
}

export default setupSocket;