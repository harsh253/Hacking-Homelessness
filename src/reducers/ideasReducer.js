import * as actionTypes from '../constants/actionTypes';

var initialState = {
    ideas: [],
    allIdeasLoading: true,
    ideaDetails: {},
    ideaDetailsLoading: true
}



export default function(state = initialState , action){

    switch(action.type){
        case actionTypes.ALL_IDEAS_RECEIVED:
            return populateAllIdeas(state, action)

        case actionTypes.IDEA_DETAILS_RECEIVED:
            return populateDetails(state,action)

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
    const {details} = action;
    var updatedState = Object.assign({}, state)
    updatedState['ideaDetails'] = details;
    updatedState['ideaDetailsLoading'] = false
    return updatedState
}