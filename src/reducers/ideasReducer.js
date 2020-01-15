import * as actionTypes from '../constants/actionTypes';

var initialState = {
    ideas: [],
    allIdeasLoading: true
}



export default function(state = initialState , action){

    switch(action.type){
        case actionTypes.ALL_IDEAS_RECEIVED:
            return populateAllIdeas(state, action)

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