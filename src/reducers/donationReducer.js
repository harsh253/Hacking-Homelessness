import * as actionTypes from '../constants/actionTypes';

var initialState = {
    donationOrgs: [],
    donationOrgsLoading: true
}



export default function(state = initialState , action){

    switch(action.type){
        case actionTypes.DONATION_ORGS_RECEIVED:
            return populateAllOrgs(state, action)
    
        default:
        return state
    }
}

function populateAllOrgs(state,action){
    const {donationOrgs} = action;
    var updatedState = Object.assign({}, state)
    updatedState['donationOrgs'] = donationOrgs;
    updatedState['donationOrgsLoading'] = false
    return updatedState
}