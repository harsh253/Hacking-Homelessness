import * as actionTypes from '../constants/actionTypes';

export function logOutUser(){
    return{
        type: actionTypes.USER_LOGGED_OUT,
    }
}