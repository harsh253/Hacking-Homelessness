import * as actionTypes from '../constants/actionTypes';

export function recentArticlesReceived(articles){
    return{
        type: actionTypes.ALL_RECENT_ARTICLES_RECEIVED,
        articles
    }
}

export function newsDetailsReceived(details){
    return{
        type: actionTypes.NEWS_DETAILS_RECEIVED,
        details
    }
}

// export function clearIdeaDetails(){
//     return{
//         type: actionTypes.CLEAR_IDEA_DETAILS
//     }
// }
