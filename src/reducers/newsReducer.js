import * as actionTypes from '../constants/actionTypes';

var initialState = {
    allRecentArticles : [],
    allOlderPosts : [],
    allArticlesLoading: true,
    newsDetails: {},
    newsDetailsLoading: true,
    newsDate: undefined,
    monthlyArticles: [],
    monthlyArticlesLoading: true
}

export default function(state = initialState, action){
    switch(action.type){
        case actionTypes.ALL_RECENT_ARTICLES_RECEIVED:
            return populateAllArticles(state, action);
        
        case actionTypes.NEWS_DETAILS_RECEIVED:
            return populateNewsDetails(state, action);

        case actionTypes.MONTHLY_ARTICLES_RECEIVED:
            return populateAllMonthlyArticles(state,action);

        case actionTypes.CLEAR_MONTHLY_ARTICLES_LIST:
            return resetMonthlyArticles(state);

        default:
            return state
    }
}

function populateAllArticles(state, action){
    const {articles} = action;
    var updatedState = Object.assign({},state);
    updatedState['allRecentArticles'] = articles;
    updatedState['allArticlesLoading'] = false;
    return updatedState    
}

function populateNewsDetails(state, action){
    const {details, date} = action;
    var updatedState = Object.assign({},state);
    updatedState['newsDetails'] = details;
    updatedState['newsDetailsLoading'] = false;
    updatedState['newsDate'] = date
    return updatedState    
}

function populateAllMonthlyArticles(state,action){
    const {monthlyArticles} = action;
    var updatedState = Object.assign({},state);
    updatedState['monthlyArticles'] = monthlyArticles;
    updatedState['monthlyArticlesLoading'] = false;
    return updatedState
}

function resetMonthlyArticles(state){
    var updatedState = Object.assign({},state);
    updatedState['monthlyArticles'] = [];
    updatedState['monthlyArticlesLoading'] = true;
    return updatedState
}