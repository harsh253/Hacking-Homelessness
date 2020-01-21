import * as actionTypes from '../constants/actionTypes';

export function recentArticlesReceived(articles){
    return{
        type: actionTypes.ALL_RECENT_ARTICLES_RECEIVED,
        articles
    }
}

export function newsDetailsReceived(details,date){
    return{
        type: actionTypes.NEWS_DETAILS_RECEIVED,
        details,
        date
    }
}

export function monthlyArticlesReceived(monthlyArticles){
    return{
        type: actionTypes.MONTHLY_ARTICLES_RECEIVED,
        monthlyArticles
    }
}

export function clearMonthlyArticles(){
    return{
        type: actionTypes.CLEAR_MONTHLY_ARTICLES_LIST
    }
}