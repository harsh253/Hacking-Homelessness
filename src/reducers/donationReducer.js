import * as actionTypes from '../constants/actionTypes';

var initialState = {
    donationOrgs: [],
    donationOrgsLoading: true,
    filteredOrgs: [],
    searching: false
}



export default function(state = initialState , action){

    switch(action.type){
        case actionTypes.DONATION_ORGS_RECEIVED:
            return populateAllOrgs(state, action)

        case actionTypes.FILTER_DONATION_ORGS:
            return filterOrgs(state,action);
    
        default:
        return state
    }
}

function populateAllOrgs(state,action){
    const {donationOrgs} = action;
    var updatedState = Object.assign({}, state)
    updatedState['donationOrgs'] = donationOrgs;
    updatedState['donationOrgsLoading'] = false
    updatedState['filteredOrgs'] = donationOrgs;
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