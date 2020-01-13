import * as actionTypes from '../constants/actionTypes';

export function orgsReceived(orgs){
    return{
        type: actionTypes.ALL_ORGS_RECEIVED,
        orgs
    }
}