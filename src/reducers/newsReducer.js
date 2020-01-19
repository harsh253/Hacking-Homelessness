import * as actionTypes from '../constants/actionTypes';

var initialState = {
    allRecentArticles : [],
    monthLinks : [],
    allOlderPosts : [],
    allArticlesLoading: true,
    newsDetails: {},
    newsDetailsLoading: true
}

export default function(state = initialState, action){
    switch(action.type){
        case actionTypes.ALL_RECENT_ARTICLES_RECEIVED:
            return populateAllArticles(state, action);
        
        case actionTypes.NEWS_DETAILS_RECEIVED:
            return populateNewsDetails(state, action);

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
    const {details} = action;
    var updatedState = Object.assign({},state);
    updatedState['newsDetails'] = details;
    updatedState['newsDetailsLoading'] = false;
    return updatedState    
}