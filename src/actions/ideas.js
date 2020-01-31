import * as actionTypes from '../constants/actionTypes';

export function ideasReceived(ideas,lastActivity){
    return{
        type: actionTypes.ALL_IDEAS_RECEIVED,
        ideas,
        lastActivity
    }
}

export function ideaDetailsReceived(details,comments,replies){
    return{
        type: actionTypes.IDEA_DETAILS_RECEIVED,
        details,
        comments,
        replies
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
        username,
    }
}