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

export function clearIdeaDetails(){
    return{
        type: actionTypes.CLEAR_IDEA_DETAILS
    }
}
