import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import orgReducer from '../reducers/orgReducer';
import donationReducer from '../reducers/donationReducer';
import ideasReducer from '../reducers/ideasReducer';
import authReducer from '../reducers/authReducer';

const store = createStore(
    combineReducers({
        orgReducer,
        donationReducer,
        ideasReducer,
        authReducer
    }),
    applyMiddleware(
        thunk,
        logger
    )
)

export default store;
