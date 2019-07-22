import * as types from '../constants/ActionTypes';

const users = (state = {show : false}, action) => {
    console.log("action: ", action);
    switch (action.type){
        case types.MODAL:
            return {show: !state.show}
        default:
            return state;
    }
}

export default users;