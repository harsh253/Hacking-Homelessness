import * as actionTypes from '../constants/actionTypes';

var initialState = {
    orgs: [],
    allOrgsLoading:true,
    orgDetails: {},
    orgDetailsLoading: true,
}



export default function(state = initialState , action){

    switch(action.type){
        case actionTypes.ALL_ORGS_RECEIVED:
            return populateAllOrgs(state, action)

        case actionTypes.ORG_DETAILS_RECEIVED:
            return populateDetails(state, action)
    
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

function populateDetails(state,action){
    const {details} = action;
    // console.log(updatedState)
    var updatedState = Object.assign({}, state)
    updatedState['orgDetails'] = details;
    updatedState['orgDetailsLoading'] = false
    return updatedState
}
