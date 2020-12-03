import {applyMiddleware, createStore} from 'redux';
import authReduces from './api/authReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const middleWare = [thunk];

const initialState = {};

const store = createStore(
    authReduces,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;