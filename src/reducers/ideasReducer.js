import * as actionTypes from '../constants/actionTypes';

var initialState = {
    ideas: [],
    allIdeasLoading: true,
    ideaDetails: {},
    ideaDetailsLoading: true,
    comments:[]
}



export default function(state = initialState , action){

    switch(action.type){
        case actionTypes.ALL_IDEAS_RECEIVED:
            return populateAllIdeas(state, action)

        case actionTypes.IDEA_DETAILS_RECEIVED:
            return populateDetails(state,action)

        case actionTypes.CLEAR_IDEA_DETAILS:
            return resetIdeaDetails(state);

        case actionTypes.ADD_COMMENT:
            return commentAdd(state,action);

        default:
        return state
    }
}

function populateAllIdeas(state,action){
    const {ideas} = action;
    var updatedState = Object.assign({}, state)
    updatedState['ideas'] = ideas;
    updatedState['allIdeasLoading'] = false
    return updatedState
}

function populateDetails(state,action){
    const {details,comments} = action;
    var updatedState = Object.assign({}, state)
    updatedState['ideaDetails'] = details;
    updatedState['comments'] = comments
    updatedState['ideaDetailsLoading'] = false
    return updatedState
}

function resetIdeaDetails(state){
    var updatedState = Object.assign({}, state)
    updatedState['ideaDetails'] = {};
    updatedState['ideaDetailsLoading'] = true
    return updatedState
}

function commentAdd(state, action){
    const {username, comment} = action
    var updatedState = Object.assign({}, state);
    var listOfComments = Object.assign([],updatedState.comments);
    listOfComments.push({username, reply:comment})
    updatedState.comments = listOfComments;
    return updatedState
}