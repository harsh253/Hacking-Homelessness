import * as actionTypes from '../constants/actionTypes';

var initialState = {
    orgs: [],
    allOrgsLoading:true,
    orgDetails: {},
    orgDetailsLoading: true,
    filteredOrgs: [],
    searching: false
}



export default function(state = initialState , action){

    switch(action.type){
        case actionTypes.ALL_ORGS_RECEIVED:
            return populateAllOrgs(state, action)

        case actionTypes.ORG_DETAILS_RECEIVED:
            return populateDetails(state, action)

        case actionTypes.FILTER_ORGS:
            return filterOrgs(state,action);
    
        default:
        return state
    }
}

function populateAllOrgs(state,action){
    const {orgs} = action;
    var updatedState = Object.assign({}, state)
    updatedState['orgs'] = orgs;
    updatedState['allOrgsLoading'] = false;
    updatedState['filteredOrgs'] = orgs;
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

function filterOrgs(state,action){
    const {filteredOrgs,searching} = action;
    // console.log(updatedState)
    var updatedState = Object.assign({}, state)
    updatedState['filteredOrgs'] = filteredOrgs;
    updatedState['searching'] = searching;
    return updatedState
}