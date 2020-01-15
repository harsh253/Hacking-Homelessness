import * as actionTypes from '../constants/actionTypes';

export function orgsReceived(orgs){
    return{
        type: actionTypes.ALL_ORGS_RECEIVED,
        orgs
    }
}

export function orgDetailsReceived(details){
    return{
        type: actionTypes.ORG_DETAILS_RECEIVED,
        details
    }
}

export function donationOrgsReceived(donationOrgs){
    return{
        type: actionTypes.DONATION_ORGS_RECEIVED,
        donationOrgs
    }
}