import * as actionTypes from '../constants/actionTypes';

var initialState = {
    accessToken: localStorage.getItem('accessTokenPresent') ? true: null,
    name: localStorage.getItem('accessTokenPresent') ? localStorage.getItem('name') : ''
}

export default function(state = initialState , action){

    switch(action.type){
        case actionTypes.USER_LOGGED_OUT:
            return logOutUser(state, action)
    
        default:
        return state
    }
}

function logOutUser(state,action){
    var updatedState = Object.assign({}, state)
    updatedState['accessToken'] = null;
    updatedState['name'] = ''
    return updatedState
}