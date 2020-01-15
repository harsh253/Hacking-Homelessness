import * as actionTypes from '../constants/actionTypes';

export function ideasReceived(ideas){
    return{
        type: actionTypes.ALL_IDEAS_RECEIVED,
        ideas
    }
}
