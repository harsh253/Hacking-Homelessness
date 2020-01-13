import * as actionTypes from '../constants/actionTypes';

var initialState = {
    orgs: [],
    allOrgsLoading:true
}



export default function(state = initialState , action){
    switch(action.type){
        case actionTypes.ALL_ORGS_RECEIVED:
            return populateAllOrgs(state,action)
    
        default:
        return state
    }
}

function populateAllOrgs(state,action){
    const {orgs} = action;
    var updatedState = Object.assign({}, state)
    updatedState['orgs'] = orgs;
    updatedState['allOrgsLoading'] = false
    return updatedState
}