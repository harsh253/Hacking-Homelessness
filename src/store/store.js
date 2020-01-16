import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import orgReducer from '../reducers/orgReducer';
import donationReducer from '../reducers/donationReducer';
import ideasReducer from '../reducers/ideasReducer';

const store = createStore(
    combineReducers({
        orgReducer,
        donationReducer,
        ideasReducer
    }),
    applyMiddleware(
        thunk,
        logger
    )
)

export default store;
