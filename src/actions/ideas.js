import * as actionTypes from '../constants/actionTypes';

export function ideasReceived(ideas){
    return{
        type: actionTypes.ALL_IDEAS_RECEIVED,
        ideas
    }
}

export function ideaDetailsReceived(details){
    return{
        type: actionTypes.IDEA_DETAILS_RECEIVED,
        details
    }
}
