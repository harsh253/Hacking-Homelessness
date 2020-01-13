import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import orgReducer from '../reducers/orgReducer';

const store = createStore(
    combineReducers({
        orgReducer,
    }),
    applyMiddleware(
        thunk
    )
)

export default store;
