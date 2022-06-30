import {createStore, applyMiddleware} from 'redux';
import allReducers from './rootReducer';

const store = createStore(allReducers);

export default store;