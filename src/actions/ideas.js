import * as actionTypes from '../constants/actionTypes';

export function ideasReceived(ideas){
    return{
        type: actionTypes.ALL_IDEAS_RECEIVED,
        ideas
    }
}

export function ideaDetailsReceived(details,comments){
    return{
        type: actionTypes.IDEA_DETAILS_RECEIVED,
        details,
        comments
    }
}

export function clearIdeaDetails(){
    return{
        type: actionTypes.CLEAR_IDEA_DETAILS
    }
}

export function addComment(comment,username){
    return{
        type: actionTypes.ADD_COMMENT,
        comment,
        username
    }
}